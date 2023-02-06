import { useCallback, useEffect, useRef, useState } from "react";
import { API } from "aws-amplify";

type MethodTypes = "get" | "post" | "patch" | "del" | "put";

export const useHttpRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const activeHttpRequests = useRef(<any>[]);

  const sendRequest = useCallback(
    async (
      url: string,
      method: MethodTypes,
      apiName: string,
      body = {},
      headers = {},
      queryStringParameters = {}
    ): Promise<any> => {
      setLoading(true);

      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        let requestExtraParams = {
          headers: {
            ...headers,
          },
          queryStringParameters,
          body,
          response: true,
        };
        const response = await API[`${method}`](
          apiName,
          url,
          requestExtraParams
        );
        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl: any) => {
            reqCtrl !== httpAbortCtrl;
          }
        );
        if (response.status >= 400) {
          throw new Error(response.data.message);
        }
        setLoading(false);
        return response.data;
      } catch (error: any) {
        setError(error.response.data.message);
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    return () =>
      activeHttpRequests.current.forEach((abortCtrl: any) => {
        abortCtrl.abort();
      });
  });

  const clearError = () => setError(null);

  return { loading, error, sendRequest, clearError };
};
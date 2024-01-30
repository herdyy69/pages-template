import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

// di sini kita buat provider untuk settingan query client dari react-query, ini di pasang di root file (pages/_app.tsx)
export const QueryProvider = ({ children }: any) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 0,
            refetchOnWindowFocus: false,
            retryDelay: 500,
            refetchOnMount: true,
          },
        },
        queryCache: new QueryCache({
          onError: (error: any) => {
            console.log(error);
          },
        }),
        mutationCache: new MutationCache({
          onError: (error: any) => {
            let message = error.response.data.error;
            if (typeof message != "string") {
              try {
                message = Object.values(message)[0];
              } catch (e) {
                console.log(e);
              }
            }
          },
        }),
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

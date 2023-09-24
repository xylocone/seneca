"use client";

import { useEffect, useState } from "react";
import { useHttpsCallable } from "react-firebase-hooks/functions";

// Internal dependencies
import { functions } from "../firebase";

interface ServerResponse {
  data: string;
}

export default function Home() {
  const [serverResponse, setServerResponse] = useState<ServerResponse | null>(
    null
  );

  const [executeHello, executing, error] = useHttpsCallable(
    functions,
    "helloWorld"
  );

  useEffect(() => {
    (async () => {
      const response = (await executeHello()) as ServerResponse;
      setServerResponse(response);
    })();
  }, []);

  return (
    <main>
      This is the main content. Response from the server: {serverResponse?.data}
    </main>
  );
}

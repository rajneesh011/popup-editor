import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CommandInterface from "./components/CommandInterface";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CommandInterface />
      {/* <Component {...pageProps} /> */}
    </>
  );
}

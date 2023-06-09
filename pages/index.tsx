import Head from "next/head";
import Image from "next/image";
import { Inter, Outfit } from "next/font/google";
import styles from "@/styles/Landing.module.css";

const outfit = Outfit({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} space-y-8`}>
        <div
          className={`${styles.hero} flex items-center justify-center border border-gray-600`}
        >
          <div className={styles.heroCircle} />
          <div className="flex flex-col space-y-4 t">
            <h1
              className={`${outfit.className} ${styles.title} ${styles.shimmer} font-medium text-center text-6xl pb-2 opacity-0.9`}
            >
              Debugging made easy
            </h1>
            <p
              className={`${inter.className} opacity-70 font-weight-200 tracking-tight text-xl text-center -translate-y-2`}
            >
              Get suggested solutions for your Supabase errors, right within
              your browser console.
            </p>
            <div className="font-mono mx-auto text-sm border rounded-full border-gray-400 px-4 py-2 flex items-center space-x-2 cursor-pointer transition hover:bg-green-900 duration-250">
              <p>npm install supadebug</p>
              <p>📋</p>
            </div>
            <div className="mx-auto translate-y-[220px]">
              <a href="https://github.com/hf/supadebug" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="cursor-pointer"
                >
                  <path
                    fill="white"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex items-start space-x-8 mx-auto pt-20 pb-10"
          style={{ width: "calc(100vw - 100px)" }}
        >
          <div className="w-[45%] rounded-xl px-8 space-y-6">
            <p className="font-mono text-gray-500">DEV PRODUCTIVITY</p>
            <h3 className="!mt-4 text-4xl">
              Dive into your errors
              <br />
              straight from the console
            </h3>
            <p className="opacity-70">
              Supa-debug provides explanations into client errors from the
              Supabase JS library, along with providing suggested solutions -
              all while within your browser console.
            </p>
          </div>
          <div className="w-[55%] rounded-xl flex justify-end">
            <div className="bg-gray-900 w-[90%] rounded-xl px-8 py-8 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-[12px] h-[12px] flex items-center justify-center bg-red-500 rounded-full space-x-4">
                    <p className="text-xs font-bold -translate-y-[1px]">
                      &times;
                    </p>
                  </div>
                  <p className="font-mono text-red-500 text-sm">
                    HTTP 400: Invalid refresh token
                  </p>
                </div>
                <p className="font-mono text-gray-500 text-sm underline">
                  next-dev.js?878b:32
                </p>
              </div>
              <div className="font-mono text-gray-400 text-sm translate-x-[27px]">
                To find out more, run supadebug.hsad() in the console
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-[12px] h-[12px] flex items-center justify-center rounded-full space-x-4">
                    <p className="text-xs font-bold -translate-y-[1px] text-gray-500">
                      {`>`}
                    </p>
                  </div>
                  <p className="font-mono text-grey-200 text-sm">
                    supadebug.hsad()
                  </p>
                </div>
              </div>
              <div className="font-mono text-gray-400 text-sm ml-[27px]">
                The refresh token has been invalidated, usually because the
                user's session has expired, or potentially a race condition has
                occured. To find out more, here are the relevant documentation:
                https://supabase.com/docs/guides/resources/glossary#refresh-token
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-start justify-center mx-auto py-20 space-y-4"
          style={{ width: "calc(100vw - 100px)" }}
        >
          <p className="font-mono text-gray-500 text-center mx-auto">
            SETTING UP
          </p>
          <p className="text-base text-center mx-auto">
            Initialize SupaDebug in the root of your app with your OpenAPI
            secret key
          </p>
          <div className="!mt-6 bg-gray-900 w-[60%] mx-auto rounded-xl px-8 py-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center font-mono text-gray-300 text-sm space-x-6">
                  <p className="text-gray-500">1</p>
                  <p>{`import { supadebug } from 'supa-debug'`}</p>
                </div>
                <div className="flex items-center font-mono text-gray-300 text-sm space-x-6">
                  <p className="text-gray-500">2</p>
                  <p>{`supadebug(OPEN_API_SECRET_KEY)`}</p>
                </div>
                <div className="flex items-center font-mono text-gray-300 text-sm space-x-6">
                  <p className="text-gray-500">3</p>
                </div>
                <div className="flex items-start font-mono text-gray-600 text-sm space-x-6">
                  <p className="text-gray-500">4</p>
                  <p>{`// All console errors from the Supabase client library will be powered by SupaDebug`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-20 pb-40 bg-[#111] flex flex-col items-center justify-center space-y-4">
          <p className="font-mono text-gray-500">STAY UPDATED WITH US</p>
          <input
            placeholder="Join our mailing list"
            className="bg-transparent border border-gray-600 rounded-lg font-lg py-2 px-4 text-gray-200 w-[500px]"
          ></input>
        </div>
      </main>
    </>
  );
}

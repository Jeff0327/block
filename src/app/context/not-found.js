const NotFound = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          style={{
            boxShadow:
              "0 10px 15px -3px rgba(255, 0, 0, 0.5), 0 4px 6px -4px rgba(255, 0, 0, 0.5)",
          }}
          className="text-center border-2 border-red-500 p-20 rounded-lg"
        >
          <p className="font-semibold text-red-900">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            페이지를 찾을수 없습니다.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="hover:scale-110 rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:shadow-lg"
            >
              돌아가기
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;

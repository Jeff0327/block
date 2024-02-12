"use client";
import { Link } from "@nextui-org/react";
function Footer() {
  return (
    <div className="flex flex-col border-1 border-red-500 p-30  w-full y-full">
      <div className="flex flex-row justify-center items-center p-3 bg-black text-white">
        <div className="flex justify-center items-center bg-black w-1/2">
          Login
        </div>
        <div className="flex justify-center items-center bg-black w-1/2">
          장바구니
        </div>
      </div>
      <div className="flex p-20 bg-yellow-500 text-black justify-center items-center">
        내용 내용
      </div>
      <div className="flex flex-row justify-center items-center p-3 bg-black text-white">
        <div className="flex justify-center items-center bg-black w-1/2">
          Login
        </div>
        <div className="flex justify-center items-center bg-black w-1/2">
          장바구니
        </div>
      </div>
      <div className="flex flex-row justify-center items-center p-3 bg-black text-white">
        <div className="flex justify-center items-center bg-black w-1/2">
          Login
        </div>
        <div className="flex justify-center items-center bg-black w-1/2">
          장바구니
        </div>
      </div>
      <div className="flex flex-row justify-center items-center p-3 bg-black text-white">
        <div className="flex justify-center items-center bg-black w-1/2">
          Login
        </div>
        <div className="flex justify-center items-center bg-black w-1/2">
          장바구니
        </div>
      </div>
      <div className="flex justify-center items-center bg-red-500">
        <div className="flex w-1/2">
          <pre>
            통신 판매업신고 : 1234-1234
            <br />
            사업자 등록번호 : 123-1234{" "}
            <Link className="underline" href="https://bizno.net/">
              사업자등록조회
            </Link>
            <br />
          </pre>
        </div>
        <div className="flex w-1/2 flex-col">
          <div>통신판매업신고 :1234-1234</div>
          <div className="text-2xl font-bold">문의사항 : 070-1234-1234</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

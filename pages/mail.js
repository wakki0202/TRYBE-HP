import React from "react";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Router from 'next/router';
import Link from 'next/link';
import Header from "../components/Header";
export default function Home() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const handleSubmit = (e) => {
 
    e.preventDefault();
    console.log('You clicked submit.');
    console.log("送信中");
    let data = {
      title,
      name,
      email,
      message,
    };
    
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("送信が成功しました");
        setSubmitted(true);
        setTitle("");
        setName("");
        setEmail("");
        setMessage("");
        Router.push('/');
      }
    });
  };


  return (
    <div>
      <div className='w-9/12 m-auto'>
        <h1 className=' text-3xl lg:text-5xl  mt-20 font-bold'>Contact.</h1>
        <span className='text-1xl'>お問い合わせ</span>
        <p className='text-center mt-8 mb-8 text-xs lg:text-sm'>下記のフォームをご記入の上、 お問い合わせください。</p>
      </div>
      <div >
        <form >
          <formGroup className={styles.inputGroup}>
            <div className='w-9/12 lg:w-7/12 m-auto'>
              <label className='block font-bold pb-3 ' htmlFor="">お問い合わせの種類*</label>
              <select type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                name="title" className='w-full bg-gray-100 p-1 h-14 lg:h-16' id="" >
                <option disabled>選択してください</option>
                <option value="仕事に関するお問い合わせ">仕事に関するお問い合わせ</option>
                <option value="業務提携・アライアンスの関するお問い合わせ">業務提携・アライアンスの関するお問い合わせ</option>
                <option value="講演・取材に関するお問い合わせ">講演・取材に関するお問い合わせ</option>
                <option value="その他">その他</option>
              </select>
            </div>
          </formGroup>
          <formGroup className={styles.inputGroup}>
            <div className='w-9/12 lg:w-7/12 m-auto pt-8'>
              <label className='block font-bold pb-3' htmlFor="">お名前*</label>
              <input type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name" className='w-full bg-gray-100 p-2 h-14 lg:h-16' id="" placeholder='サイクル太郎' />
            </div>
          </formGroup>
          <formGroup className={styles.inputGroup}>
            <div className='w-9/12 lg:w-7/12 m-auto pt-8'>
              <label className='block font-bold pb-3' htmlFor="">メールアドレス*</label>
              <input type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email" className='w-full bg-gray-100 p-2 h-14 lg:h-16' id="" placeholder='xxx@example.com' />
            </div>
          </formGroup>
          <formGroup className={styles.inputGroup}>
            <div className='w-9/12 lg:w-7/12 m-auto pt-8'>
              <label className='block font-bold pb-3' htmlFor="">お問い合わせ内容*</label>
              <textarea type="text"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name="message" className='w-full bg-gray-100 h-48 p-2' id="" placeholder='お問い合わせ内容を入力してください'>
              </textarea>
            </div>
          </formGroup>
        </form>
        
        <div className="text-center"> 
        <button
          className=" mt-10 mb-20 border border-gray-300  w-9/12 lg:w-7/12 m-auto py-5 hover:bg-gray-700 hover:text-white duration-200 font-bold"
          type="button"
          onClick={() => setShowModal(true)}
        >
          送信する
          </button>
        </div>

        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5  border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      送信します。よろしいですか？
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6  border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      キャンセル
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      onClick={(e) => {
                        handleSubmit(e);
                      }} 
                    >
                      送信する
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}

        
      </div>

      
    </div>
  );
}
















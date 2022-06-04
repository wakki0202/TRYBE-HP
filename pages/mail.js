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
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <div className='text-center mt-10 mb-20 border border-gray-300  w-9/12 lg:w-7/12 m-auto py-5 hover:bg-gray-700 hover:text-white duration-200'>
            <Link href='/contact'><a type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }} className='font-bold'>送信する</a></Link>
          </div>
        </form>
      </div>
    </div>
  );
}
















import React from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Projects/Hero";
import Projects from "@/components/Projects/Projects";
import Newsletter from "@/components/Layout/Newsletter";

const projects = () => {
  return (
    <>
      <Head>
        <title>Will Squire</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Newsletter/>
      <Footer/>
   </>
  );
};

export default projects;

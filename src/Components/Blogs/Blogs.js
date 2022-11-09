import React from "react";

const Blogs = () => {
  return (
    <div className="lg:mt-10">
      <div className="grid grid-cols-1 justify-items-center">
        <div className="m-5 bg-pink-50 p-7 rounded-lg lg:w-3/6">
          <h2 className="text-2xl font-mono font-bold text-sky-600">
            What is the Difference between SQL and NoSQL?
          </h2>
          <p className="font-serif text-lime-600">
            Many people are familiar with Relational Database Management Systems
            (RDBMS) and the Structured Query Language (SQL) used to communicate
            with them, from analysts and engineers to IT decision makers.
            Although these names speak to a long-standing paradigm, the sheer
            number and depth of database systems available today might be
            overwhelming. These well-liked RDBMS substitutes, collectively
            referred to as NoSQL, provide hope for a range of contemporary use
            applications. Practitioners should be aware of the distinctions
            between SQL, NoSQL, individual Database Management Systems (DBMS),
            languages, as well as the circumstances each is best suited for, as
            well as how the landscape is evolving, in order to make educated
            judgments about which to utilize.
          </p>
        </div>
        <div className="m-5 bg-pink-50 p-7 rounded-lg lg:w-3/6">
          <h2 className="text-2xl font-mono font-bold text-sky-600">
            What is JWT, and how does it work?
          </h2>
          <p className="font-serif text-lime-600">
            An open standard called JSON Web Token (JWT) (RFC 7519) outlines a
            condensed and independent method for securely transferring data
            between parties as a JSON object. The fact that this information is
            digitally signed allows for verification and confidence. JWTs can be
            signed using a public/private key pair using RSA or ECDSA or a
            secret (with the HMAC technique). We will concentrate on signed
            tokens even though JWTs may be encrypted to additionally offer
            confidentiality between parties. While encrypted tokens conceal such
            claims from other parties, signed tokens may be used to confirm the
            validity of the claims they contain. When signing tokens using
            public/private key pairs, the signature additionally attests that
            only the party in possession of the private key signed the token.
          </p>
        </div>
        <div className="m-5 bg-pink-50 p-7 rounded-lg lg:w-3/6">
          <h2 className="text-2xl font-mono font-bold text-sky-600">
            What is the difference between javascript and Node JS?
          </h2>
          <p className="font-serif text-lime-600">
            1. Any browser that has the JavaScript Engine installed may be used
            to create basic programs using JavaScript. On the other side,
            Node.js functions as a JavaScript interpreter or execution
            environment. To be more useful, it needs libraries that can be
            quickly accessible from JavaScript programming. <br />
            2. JavaScript is a cross-platform, interpreted, and lightweight
            client-side scripting language. It is present in HTML and Java. On
            the other hand, Node.js is a server-side programming language that
            is built on V8. It is therefore employed to develop network-centric
            applications. It is a networked system designed for real-time
            applications that require a lot of data. It is evident from a
            comparison between node js vs python that node js will always be the
            better choice.
          </p>
        </div>
        <div className="m-5 bg-pink-50 p-7 rounded-lg lg:w-3/6">
          <h2 className="text-2xl font-mono font-bold text-sky-600">
            How does Node JS handle multiple requests at the same time?
          </h2>
          <p className="font-serif text-lime-600">
            Numerous client requests are received by NodeJS, which adds them to
            EventQueue. The event-driven architecture approach was used in the
            construction of NodeJS. The EventLoop in NodeJS is an endless loop
            that accepts and handles requests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

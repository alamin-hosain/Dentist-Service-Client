import React from 'react'
import BelowMenu from '../../Components/Shared/BelowMenu'
import { pageTitle } from '../../utils/PageTitle'

const Blog = () => {
    pageTitle('Blog - All the blog post');
    return (
        <>
            <BelowMenu title={'Blog '} />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div className="mb-10 border-t border-b divide-y">
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    SQL & NoSQL
                                </a>
                                <p className="text-gray-600">7 Nov 2022</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        Difference between SQL and NoSQL
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                            </p>
                            <p className='mt-4 text-lg'>The five critical differences between SQL vs NoSQL are:</p>
                            <ol className=' space-y-6'>
                                <li>1. SQL databases are relational, NoSQL databases are non-relational.</li>
                                <li>2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                                <li>3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                                <li>4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                                </li>
                                <li>5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. </li>
                            </ol>
                        </div>
                    </div>
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    JWT
                                </a>
                                <p className="text-gray-600">08 Nov 2022</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        What is JWT, and how does it work?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                            </p>
                        </div>
                    </div>
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    Javascript vs Node Js
                                </a>
                                <p className="text-gray-600">09 Nov 2022</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2 space-y-4">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        What is the difference between javascript and NodeJS?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                            </p>
                            <p>Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</p>
                            <p>Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.

                            </p>
                        </div>
                    </div>

                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    Node Js Functions
                                </a>
                                <p className="text-gray-600">10 Nov 2022</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2 space-y-4">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        How does NodeJS handle multiple requests at the same time?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                                NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
/* eslint-disable react/no-unescaped-entities */

import { useRef } from "react";
import { FaFileDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = useRef()
    return (
        <div ref={ref} className="flex flex-col gap-10 px-5 md:px-12 md:max-w-[800px] mx-auto py-12">
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf} className="px-3 py-3  bg-amber-300 text-gray-800 font-bold flex items-center justify-center">
                    <span className="mr-2"><FaFileDownload /></span>
                    Download pdf</button>}
            </Pdf>

            <div>
                <h3 className="text-2xl md:text-3xl font-bold">1.Differences between uncontrolled and controlled components</h3>
                <p className="font-bold mt-3">In controlled component the form input element’s values and mutations are controlled by event handlers and the value of the input element is always changes by the state.</p>
                <p className="font-bold mt-3">In uncontrolled component the form input element’s do not use state or any event handler. This type of component doesn’t care about an input element’s real-time value changes</p>
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-bold">2.How to validate React props using PropTypes</h3>
                <p className="font-bold mt-3">PropTypes is a type-checking library that comes with React. It allows us to specify the types of the props that your components receive, which helps us catch bugs early and improve the overall quality of our code.we need to define the propTypes property on the component function and assign it an object that describes the expected types of the props.photoTypes can be string,boolean,number etc.
                </p>
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-bold">What is a custom hook, and why will you create a custom hook</h3>
                <p className="font-bold mt-3">Custom hook is a reuseable function. We create custom hook.Custom hook starts with "use".I will create Custom hooks to reduce code duplication and improve code reusability and When i will  find myselfself repeating the same code in multiple components.</p>
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-bold">Difference between nodejs and express js.</h3>
                <p className="font-bold mt-3">Node.js is a run-time environment created to run JavaScript on the server side.
                    Express.js is a framework for Node.js.Express.js will help us to organize out application better and it also provide us many features.</p>
            </div>
        </div>
    );
};

export default Blog;
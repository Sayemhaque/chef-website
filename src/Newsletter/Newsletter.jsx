
const Newsletter = () => {
  return (
    <section className="py-8">
      <h3 className="uppercase font-bold text-4xl  text-center font-serif">newsletter</h3>
      <div className="hero min-h-[300px] mt-8" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60")`, backgroundAttachment: "fixed", backgroundSize: "cover" }}>
        <div className="hero-overlay h-full bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">

          <div className="max-w-md">
            <h1 className="font-bold text-3xl font-mono">Get the latest repice</h1>
            <div>
              <input type="text" className="w-10/12 py-2 mt-5 px-2 rounded-md text-black focus:outline-0" placeholder="username@email.com" />
            </div>
            <button className="bg-amber-500 px-6 py-2 rounded-lg text-black font-bold mt-5 uppercase">subscribe</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
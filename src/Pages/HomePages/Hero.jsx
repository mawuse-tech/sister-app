import React from 'react'

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1660163182/photo/smiling-women-wearing-t-shirts-with-pink-ribbon-isolated-on-pink-background-breast-cancer.jpg?s=612x612&w=0&k=20&c=VUBocY8ZyHzcDaVnrdBjalSNJHnUv5DbdNkxAXH5HT8=)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">WE ARE HERE TO LISTEN,TALK TO US</h1>
            <p className="mb-5">
              A problem shared is a problem half solved.No matter the challenge, we are here to support you.
              Talk to our team of experts today
            </p>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
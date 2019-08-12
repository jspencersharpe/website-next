import React from "react"

const Technologies = () => {
  const technologies = [
    {
      name: "JavaScript",
      image_url:
        "http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg",
      url: "https://www.javascript.com/"
    },
    {
      name: "React",
      image_url: "https://cdn.worldvectorlogo.com/logos/react.svg",
      url: "https://reactjs.org/"
    },
    {
      name: "Angular",
      image_url: "https://angular.io/assets/images/logos/angular/angular.png",
      url: "https://angular.io/"
    },
    {
      name: "HTML5",
      image_url: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
      url: "https://en.wikipedia.org/wiki/HTML5"
    },
    {
      name: "Sass",
      image_url: "http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
      url: "http://sass-lang.com/"
    },
    {
      name: "npm",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2000px-Npm-logo.svg.png",
      url: "https://www.npmjs.com/"
    },
    {
      name: "git",
      image_url: "https://git-for-windows.github.io/img/git_logo.png",
      url: "https://git-scm.com/"
    },
    {
      name: "Webpack",
      image_url: "https://webpack.github.io/assets/logo.png",
      url: "https://webpack.github.io/"
    },
    {
      name: "Node",
      image_url:
        "https://raygun.com/blog/wp-content/uploads/2016/05/nodejs-logo.png",
      url: "https://nodejs.org/en/"
    },
    {
      name: "Express",
      image_url:
        "https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67",
      url: "https://expressjs.com/"
    }
  ]

  return (
    <div className="technologies">
      <ul>
        {technologies.map((item, index) => (
          <li key={index}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="img-link"
              href={item.url}
              alt={item.name}
            >
              <img
                src={item.image_url}
                alt={item.name}
                width="75"
                height="75"
              />
            </a>
          </li>
        ))}
      </ul>
      <style jsx="true">{`
        .technologies > ul {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 10px;
          padding-left: 0;
        }

        @media only screen and (min-width: 700px) {
          .technologies > ul {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        @media only screen and (min-width: 1200px) {
          .technologies > ul {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        .technologies > ul > li {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .img-link {
          max-width: 75px;
        }

        .img-link img {
          object-fit: cover;
          width: 100%;
          height: auto;
        }

        @media only screen and (min-width: 1200px) {
          .technologies > ul > li > a img {
            max-width: 100px;
            max-height: 100px;
          }
        }
      `}</style>
    </div>
  )
}

export default Technologies

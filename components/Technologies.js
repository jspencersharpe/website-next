import React from "react"
import { technologies } from "../utils"

const Technologies = () => (
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
            <img src={item.image_url} alt={item.name} width="75" height="75" />
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
        padding-top: 30px;
      }

      @media only screen and (min-width: 768px) {
        .technologies > ul {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
        .img-link {
          max-width: 100px;
        }
      }
    `}</style>
  </div>
)

export default Technologies

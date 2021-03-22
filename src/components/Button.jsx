import React from 'react'
import './Button.sass'

export const Button = (props) => {

  const { getActors, actors, loading, buttonStyle, loaderStyle,
  } = props

  const renderActors = (actors) => {
    return actors.map(({ id, name, description, image }) => {
      return (
        <div className="buttonArea__actor" key={id}>
          <h3>{name}</h3>
          <p>{description}</p>
          <img src={image} alt="actor" />
        </div>
      )
    })
  }

  return (
    <>
      <button
        className={buttonStyle.join(' ')}
        onClick={() => getActors()}
        disabled={actors ? true : false}
      >
        {loading
          ? <div className={loaderStyle.join(' ')}>Loading...</div>
          : props.children
        }
      </button>
      {props.actors
        ? <div className="buttonArea__actors"> {renderActors(actors)}</div>
        : null
      }
    </>
  )
}


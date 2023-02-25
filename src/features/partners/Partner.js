//We will still need to return something even if the partner object contained a falsy value.
//All React components must return either a JSX value or the JavaScript value null. 
//Returning the value null will prevent the component from rendering. 
//That is the result we wish to achieve in this case.

const Partner =({partner}) => {
  if (partner) {
    const {image, name, description} = partner

    return (
      <>
        <img src={image} alt={name} style={{ width: "150px" }} />
        <div className="m-4">
          <h5 className="fw-bold">{name}</h5>
          {description}
        </div>
      </>
    );
  }

   return null;
}

export default Partner;
interface IProps{
  imageURL:string;
  alt:string;
}

const Image = ({ imageURL , alt }: IProps) => {

  return(
    <img src={imageURL}  alt={alt} />
  )

}

export default Image
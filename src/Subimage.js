import Header from "./Header"



function Subimage() {

  let [val, setval] = useState([])


    useEffect(() => {

        axios.get('https://dummyjson.com/products/category')
          .then(function (response) {
            console.log(response.data.products);
            setval(response.data.products)
          })
          .catch(function (error) {
            console.log(error);
          })
      });

    return(
        <>
          <Header/>   
        </>
    )
}

export default Subimage;
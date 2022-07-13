import React, {useState, useEffect} from 'react'
import axios from "axios"
import {toast} from "react-toastify"
import {MDBRow, MDBCol, MDBContainer, MDBTypography, MDBNavbar,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse} from "mdb-react-ui-kit"
import { Blogs } from '../component/Blogs'
import { Search } from '../component/Search'
import { Category } from '../component/Category'
import { LatestBlog } from '../component/LatestBlog'
import Footer from '../component/footer/Footer'
import styles from "./style.css"

export const Home = () => {
  const [showNavColor, setShowNavColor] = useState(false);
const [data, setData ] = useState([]);
const [latestBlog, setLatestBlog] = useState([]);
const [searchValue, setSearchValue] = useState("");
const options = ["Music", "Sports", "Tech", "Memes", "News", "Food"]; 
useEffect(() => {
loadBlogsData();
fetchLatestBlog();
}, [])
const loadBlogsData = async () => {
  const response = await axios.get("http://localhost:5000/blogs");
  if(response.status === 200) {
    setData(response.data)
  }else{
    toast.error("something went wrong");
  }
}
const fetchLatestBlog = async () => {
const totalBlog = await axios.get("http://localhost:5000/blogs");
const start = totalBlog.data.length - 4;
const end = totalBlog.data.length;
const response = await axios.get(`http://localhost:5000/blogs?_start=${start}&_end=${end}`);
 if(response.status === 200) {
  setLatestBlog(response.data)
}else{
  toast.error("something went wrong");
}
}
console.log("data", data)
const handleDelete = async (id) => {
  if(window.confirm("Are you sure you wanted to delete that blog ?")){
    
      const response = await axios.delete(`http://localhost:5000/blogs/${id}`);
      if(response.status === 200) {
       toast.success("Blog deleted successfully");
       loadBlogsData();
      }else{
        toast.error("something went wrong");
      }
  }
};
const excerpt = (str) => {
if(str.length > 50) {
  str = str.substring(0, 50) + " ... ";
}
return str;
};
const onInputChange = (e) => {
  if(!e.target.value){
    loadBlogsData();
  }
setSearchValue(e.target.value);
}
const handleSearch = async(e) => {
e.preventDefault();
const response = await axios.get(`http://localhost:5000/blogs?q=${searchValue}`);
if(response.status === 200){
  setData(response.data)
}else{
  toast.error("something went wrong")
}
}
const handleCategory = async (category) => {
const response = await axios.get(`http://localhost:5000/blogs?category=${category}`);
if(response.status === 200){
  setData(response.data)
}else{
  toast.error("something went wrong")
}
}
  return (
    
    <>
     <MDBNavbar expand='lg' dark bgColor='primary' style={{marginTop: "50px"}}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>HOPEBLOG</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavColor(!showNavColor)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColor} navbar>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink aria-current='page' href='/home'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
           
        
             
              <MDBNavbarItem flush>
{options.map((item, index) => (
    <MDBNavbarLink key={index} style={{cursor: "pointer"}} onClick={() => handleCategory(item)}>
        {item}
    </MDBNavbarLink>
))}
</MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    <Search searchValue={searchValue} onInputChange={onInputChange} handleSearch={handleSearch} />
    <h4 className="text-start"  style={{backgroundColor: "#f00", marginBottom: "30px", marginTop: "30px", color: "#fff"}}>HOTTEST POST</h4>
    <MDBRow>
      {data.length === 0 && (
        <MDBTypography className="text-center mb-0" tag="h2">
No Blog Found
        </MDBTypography>
      )}
      <MDBCol>
        <MDBContainer>
          <MDBRow  className='row-cols-1 row-cols-md-3 g-4'>
            {data && data.map((item, index) =>
            <Blogs 
            key={index}
            {...item}
            excerpt={excerpt}
            handleDelete={handleDelete}
            />
            )}
          </MDBRow>
        </MDBContainer>
      </MDBCol>
      <MDBCol md="3" style={styles.noh}>
        <h4 className="text-start"  style={{backgroundColor: "#1266f1", marginTop: "30px", color: "#fff", padding: "8px"}}>LATEST POST</h4>
        {latestBlog && latestBlog.map((item, index) => (
          <LatestBlog key={index} {...item} />
        ))}
<Category options={options} handleCategory={handleCategory} />
      </MDBCol>
    </MDBRow>
    <Footer />
    </>
  )
}

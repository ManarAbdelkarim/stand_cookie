import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
margin: 0;
height: 80px;
background: #000;
display: grid;
background-color:hsl(160deg 80% 40%);
width:100%;
grid-template-columns:20%  10%;
justify-content: space-between;   
align-content:space-between; 
font-weight: bolder;
`;

const Bar = styled.nav`
height: 80px;
margin:10%;
width:110%;
color: black;
font-weight: bolder;
`;

const Button = styled.nav`
margin-top:15%;
color: white;
background-color: white;
color:black;
width: 50%;
`;

function Navbar() {
    return (
        <Nav>
        <div>
            <Bar>
            <h1>Cookie Stand Admin</h1>
            </Bar>
        </div>
        <div>
        <Button>
        <button id = 'overview'> Overview</button>
        <style jsx>{`
        #overview {
            color:black;
            font-weight:600;
            text-align:center;
           
      }
      `}</style>
        </Button>
        </div>
        </Nav>
    )
}

export default Navbar

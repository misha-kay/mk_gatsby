import React from 'react';
import Img from "gatsby-image"
import {AppContextWrapper} from '../components/layout.js'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import PageTransition from 'gatsby-plugin-page-transitions'

const StyledDetailWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 70vw;
  grid-template-rows: min-content;
  justify-content: center;
  grid-template-areas: 
  "text"
  "images";
  @media only screen and (max-width: 768px){
    grid-template-columns: 90vw;
  }
`
const StyledParagraph = styled.p`
  font-size: 17px;
  grid-area: text;
  font-family: 'Montserrat', sans-serif;
  color: #4a4a4a;
  font-size: 13px;
  font-weight: 500;
  padding: 50px 0px 50px 0px;
`

const StyledDetailImageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-area: images;
  grid-template-rows: auto;
  row-gap: 20px;
`

const StyledImg = styled(Img)`
  padding: 10px;
  > picture > img {
      object-fit: contain !important;
      border-radius: 5px !important;
    }
`

export default ({data}) => {
  const images = data.allMarkdownRemark.edges[0].node.frontmatter.images
  console.log(data)
  return (
    <AppContextWrapper>
    <PageTransition defaultStyle={{
      transition: 'top 350ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      top: '100%',
      position: 'relative',
      height: '100%',
      justifySelf: 'center'
    }}
    transitionStyles={{
      entering: { top: '0%' },
      entered: { top : '0%' },
      exiting: { top : '100%' },
      exited:{ top: '100%'},
    }}
    transitionTime={500}
  >
      <StyledDetailWrapper>
        <StyledParagraph>{data.allMarkdownRemark.edges[0].node.frontmatter.info}</StyledParagraph>
          <StyledDetailImageWrapper>
            {images.map((gc) => (<StyledImg fluid={gc.childImageSharp.fluid} key={gc.childImageSharp.id} />))}
          </StyledDetailImageWrapper>
        </StyledDetailWrapper>
        </PageTransition>
      </AppContextWrapper>
    );
  }
  
  export const query = graphql`
query ($slug: String!) {
    allMarkdownRemark(filter: {fields: {slug: {eq: $slug}}}) {
      edges {
        node {
          frontmatter {
            title
            info
            images {
              childImageSharp {
                id
                fluid(maxWidth: 1000) {
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
  } 
`
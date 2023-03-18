import React from 'react'
import styled from 'styled-components'
import { Mobile, Tablet } from '../../Responsive'

const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    /* margin-top: 80px; */

    /* ${Tablet({marginTop: 120})} */
`
const GalleryImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    height: 80vh;
    width: calc(100% - 250px);

    ${Tablet({width: "calc(100% - 150px)"})}
    ${Mobile({width: "calc(100% - 50px)",
      flexDirection: "column",
      flexWrap: "nowrap",
      height: "100vh"})}
`
const LeftImages = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
`
const SmallImgDiv = styled.div`
    height: 100%;
`
const SmallPiture = styled.picture`
`
const SmallSource = styled.source`
`
const SmallImage = styled.img`
    width: 100%;
    height: 37vh;
    object-fit: fill;
    border-radius: 10px;

    ${Tablet({height: "35vh"})}
`
const LargeImgDiv = styled.div`
    flex: 2;
    height: 100%;
`
const LargePiture = styled.picture`
`
const LargeSource = styled.source`
`
const LargeImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 10px;

    ${Tablet({height: "96%"})}
`

const Gallery = ({Detail}) => {
  return (
    <Section>
      <GalleryImages>
        <LeftImages>
              <SmallImgDiv>
                <SmallPiture>
                  <SmallSource media='(max-width: 375px)' srcSet={Detail.gallery.first.mobile}/>
                  <SmallSource media='(max-width: 768px)' srcSet={Detail.gallery.first.tablet}/>
                  <SmallSource media='(min-width: 769px)' srcSet={Detail.gallery.first.desktop}/>
        <SmallImage src={Detail.gallery.first.desktop}/>
                </SmallPiture>
            </SmallImgDiv>
            <SmallImgDiv>
              <SmallPiture>
                <SmallSource media='(max-width: 375px)' srcSet={Detail.gallery.second.mobile}/>
                <SmallSource media='(max-width: 768px)' srcSet={Detail.gallery.second.tablet}/>
                <SmallSource media='(min-width: 769px)' srcSet={Detail.gallery.second.desktop}/>
          <SmallImage src={Detail.gallery.second.desktop}/>
              </SmallPiture>
             </SmallImgDiv>
           </LeftImages>
        <LargeImgDiv>
          <LargePiture>
            <LargeSource media='(max-width: 375px)' srcSet={Detail.gallery.third.mobile}/>
            <LargeSource media='(max-width: 768px)' srcSet={Detail.gallery.third.tablet}/>
            <LargeSource media='(min-width: 769px)' srcSet={Detail.gallery.third.desktop}/>
            <LargeImage src={Detail.gallery.third.desktop}/>
          </LargePiture>
        </LargeImgDiv>
    </GalleryImages>
    </Section>
  )
}

export default Gallery
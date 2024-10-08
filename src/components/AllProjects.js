import { usePdf } from '@mikecousins/react-pdf'
import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useLocation } from 'react-router-dom'

const AllProjects = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  // Define breakpoints for responsiveness
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  // fist carousel data vsl
  const items1 = [
    {
      id: 1,
      src: 'https://www.dailymotion.com/embed/video/k4GpBL8ucW5ShOBxiCE'
    },
    {
      id: 2,
      src: 'https://www.dailymotion.com/embed/video/k5FKSG1mK02qe2Bxixq'
    },
    {
      id: 3,
      src: 'https://www.dailymotion.com/embed/video/k3KJCdvm4IDenaBwwpi'
    },
    {
      id: 4,
      src: 'https://www.dailymotion.com/embed/video/k5GDCWaS067HtZBwwpm'
    },
    {
      id: 5,
      src: 'https://www.dailymotion.com/embed/video/k2X9JWevDWlsYpBwwpk'
    },
    {
      id: 6,
      src: 'https://www.dailymotion.com/embed/video/k4cKHGLSdeiXFOBwwqU'
    },
    {
      id: 7,
      src: 'https://www.dailymotion.com/embed/video/k2X9JWevDWlsYpBwwpk'
    }
  ]

  // second carousel data tiktok

  const items2 = [
    {
      id: 1,
      src: 'https://www.dailymotion.com/embed/video/k2rlbGxcJaFj9RBxiCC'
    },
    {
      id: 2,
      src: 'https://www.dailymotion.com/embed/video/k1uHyyiWWPRQZdBxiCG'
    },
    {
      id: 3,
      src: 'https://www.dailymotion.com/embed/video/kivkIJhKucbWAsBxiCy'
    },
    {
      id: 4,
      src: 'https://www.dailymotion.com/embed/video/kC2ujdr5OplIKBBxitw'
    },
    {
      id: 5,
      src: 'https://www.dailymotion.com/embed/video/k1qsNCFdtHrUTUBxitu'
    },
    {
      id: 6,
      src: 'https://www.dailymotion.com/embed/video/k5G5i2GXF4G4rMBxitq'
    }
  ]

  // third carousel data advertisements

  const items3 = [
    {
      id: 1,
      src: 'https://www.dailymotion.com/embed/video/k2LPL2lhyWvBWhBxits'
    },
    {
      id: 2,
      src: 'https://www.dailymotion.com/embed/video/k5aK4pppqi8hEBBxiAo'
    }
  ]

  //fourth craousel data others

  const items4 = [
    {
      id: 1,
      src: 'https://www.dailymotion.com/embed/video/k1F4dWABAbHAKvBxjp6'
    },
    {
      id: 2,
      src: 'https://www.dailymotion.com/embed/video/k2DV2Da4KQTGLTBxiCI'
    },
    {
      id: 3,
      src: 'https://www.dailymotion.com/embed/video/kpwR9F0kfg3kLzBxiCA'
    },
    {
      id: 4,
      src: 'https://www.dailymotion.com/embed/video/k8nCvYMrv8RR7vBxiCw'
    }
  ]

  const graphics = [
    {
      id: 1,
      src: require('../assets/life1.png')
    },
    {
      id: 2,
      src: require('../assets/life2.png')
    },
    {
      id: 3,
      src: require('../assets/life3.png')
    },
    {
      id: 4,
      src: require('../assets/life4.png')
    },
    {
      id: 5,
      src: require('../assets/life5.png')
    },
    {
      id: 6,
      src: require('../assets/life6.png')
    },
    {
      id: 7,
      src: require('../assets/life7.png')
    },
    {
      id: 8,
      src: require('../assets/life9.png')
    }
  ]

  const graphics2 = [
    {
      id: 1,
      src: require('../assets/grap/IMAGE1.png')
    },
    {
      id: 2,
      src: require('../assets/grap/IMAGE2.png')
    },
    {
      id: 3,
      src: require('../assets/grap/IMAGE3.png')
    },
    {
      id: 4,
      src: require('../assets/grap/IMAGE4.png')
    },
    {
      id: 5,
      src: require('../assets/grap/IMAGE5.png')
    },
    {
      id: 6,
      src: require('../assets/grap/IMAGE6.png')
    },
    {
      id: 7,
      src: require('../assets/grap/IMAGE7.png')
    },
    {
      id: 8,
      src: require('../assets/grap/IMAGE8.png')
    },
    {
      id: 9,
      src: require('../assets/grap/IMAGE9.png')
    },
    {
      id: 10,
      src: require('../assets/grap/IMAGE10.png')
    }
  ]

  const graphics3 = [
    {
      id: 1,
      src: require('../assets/graph2/IMAGE11.png')
    },
    {
      id: 2,
      src: require('../assets/graph2/IMAGE12.png')
    },
    {
      id: 3,
      src: require('../assets/graph2/IMAGE13.png')
    },
    {
      id: 4,
      src: require('../assets/graph2/IMAGE14.png')
    },
    {
      id: 5,
      src: require('../assets/graph2/IMAGE15.png')
    },
    {
      id: 6,
      src: require('../assets/graph2/IMAGE16.png')
    },
    {
      id: 7,
      src: require('../assets/graph2/IMAGE17.png')
    },
    {
      id: 8,
      src: require('../assets/graph2/IMAGE18.png')
    },
    {
      id: 9,
      src: require('../assets/graph2/IMAGE19.png')
    },
    {
      id: 10,
      src: require('../assets/graph2/IMAGE20.png')
    }
  ]

  const [page, setPage] = useState(1)
  const canvasRef = useRef(null)

  const { pdfDocument, pdfPage } = usePdf({
    file: './DentaChew.pdf',
    page,
    canvasRef
  })

  return (
    <div>
      <div
        style={{
          color: 'white',
          height: '10vh',
          textAlign: 'center',
          alignContent: 'center'
        }}
      >
        <h1 style={{ fontSize: '6vh' }} className='leading-tight text-accent'>
          Video Editing
        </h1>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: 20,
          textAlign: 'center'
        }}
      >
        {/* First Column */}
        <div className='video-column'>
          <h2 style={{ fontSize: '3vh' }} className='leading-tight text-black'>
            Video Sales Letter
          </h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={2000}
            showDots={true}
            arrows={true}
          >
            {items1.map((video) => (
              <div
                key={video.id}
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  border: '2px solid white',
                  marginTop: '20px'
                }}
              >
                <iframe
                  width='100%'
                  height='400'
                  src={`${video.src}?autoplay=0&controls=1&title=0`}
                  title={`Video ${video.id}`}
                  allowFullScreen
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Second Column */}
        <div className='video-column'>
          <h2 style={{ fontSize: '3vh' }} className='leading-tight text-black'>
            Tiktok
          </h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={2000}
            showDots={true}
            arrows={true}
          >
            {items2.map((video) => (
              <div
                key={video.id}
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  border: '2px solid white',
                  marginTop: '20px'
                }}
              >
                <iframe
                  width='100%'
                  height='400'
                  src={`${video.src}?autoplay=0&controls=1&title=0`}
                  title={`Video ${video.id}`}
                  allowFullScreen
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Third Column */}
        <div className='video-column'>
          <h2 style={{ fontSize: '3vh' }} className='leading-tight text-black'>
            Advertisements
          </h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={2000}
            showDots={true}
            arrows={true}
          >
            {items3.map((video) => (
              <div
                key={video.id}
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  border: '2px solid white',
                  marginTop: '20px'
                }}
              >
                <iframe
                  width='100%'
                  height='400'
                  src={`${video.src}?autoplay=0&controls=1&title=0`}
                  title={`Video ${video.id}`}
                  allowFullScreen
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Fourth Column */}
        <div className='video-column'>
          <h2 style={{ fontSize: '3vh' }} className='leading-tight text-black'>
            Others
          </h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={2000}
            showDots={true}
            arrows={true}
          >
            {items4.map((video) => (
              <div
                key={video.id}
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  border: '2px solid white',
                  marginTop: '20px'
                }}
              >
                <iframe
                  width='100%'
                  height='400'
                  src={`${video.src}?autoplay=0&controls=1&title=0`}
                  title={`Video ${video.id}`}
                  allowFullScreen
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div
        style={{
          color: 'white',
          height: '10vh',
          textAlign: 'center',
          alignContent: 'center'
        }}
      >
        <h1 style={{ fontSize: '6vh' }} className='leading-tight text-accent'>
          Graphic Design
        </h1>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: 20,
          textAlign: 'center'
        }}
      >
        {/* First Column */}
        <div className='video-column'>
          <h2 style={{ fontSize: '3vh' }} className='leading-tight text-black'>
            Beauty
          </h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={2000}
            showDots={true}
            arrows={true}
          >
            {graphics.map((img) => (
              <div
                key={img.id}
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  border: '2px solid white',
                  marginTop: '20px'
                }}
              >
                <img
                  width='100%'
                  height='400'
                  src={img.src}
                  title={`Image ${img.id}`}
                  allowFullScreen
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Second Column */}

        <div className='video-column'>
          <h2 style={{ fontSize: '3vh' }} className='leading-tight text-black'>
            Lifestyle
          </h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={2000}
            showDots={true}
            arrows={true}
          >
            {graphics2.map((img) => (
              <div
                key={img.id}
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  border: '2px solid white',
                  marginTop: '20px'
                }}
              >
                <img
                  width='100%'
                  height='400'
                  src={img.src}
                  title={`Image ${img.id}`}
                  allowFullScreen
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* third Column */}

        <div className='video-column'>
          <h2 style={{ fontSize: '3vh' }} className='leading-tight text-black'>
            Lifestyle
          </h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={2000}
            showDots={true}
            arrows={true}
          >
            {graphics3.map((img) => (
              <div
                key={img.id}
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  border: '2px solid white',
                  marginTop: '20px'
                }}
              >
                <img
                  width='100%'
                  height='400'
                  src={img.src}
                  title={`Image ${img.id}`}
                  allowFullScreen
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div
        style={{
          color: 'white',
          height: '10vh',
          textAlign: 'center',
          alignContent: 'center'
        }}
      >
        <h1 style={{ fontSize: '6vh' }} className='leading-tight text-accent'>
          Script Writing
        </h1>
      </div>

      <div
        style={{
          display: 'grid',

          justifyContent: 'center',
          padding: 20,
          textAlign: 'center'
        }}
      >
        <div style={{ mb: '20px' }}>
          <h2 style={{ fontSize: '3vh' }} className='leading-tight text-black'>
            Sample Script
          </h2>
        </div>
        <div
          style={{
            backgroundColor: 'black',
            borderRadius: '20px',
            border: '2px solid black'
          }}
        >
          {!pdfDocument && <span>Loading...</span>}
          <canvas
            style={{ height: '80vh', borderRadius: '20px' }}
            ref={canvasRef}
          />
          {Boolean(pdfDocument && pdfDocument.numPages) && (
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ marginLeft: '20px' }}>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                  Previous
                </button>
              </div>
              <div style={{ marginRight: '20px' }}>
                <button
                  disabled={page === pdfDocument.numPages}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* script writing end here */}
    </div>
  )
}

export default AllProjects

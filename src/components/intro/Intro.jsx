import './intro.css';


const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, I'm</h2>
                <h1 className="i-name">Hopago</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Lecture</div>
                        <div className="i-title-item">Content Creator</div>
                        <div className="i-title-item">Business Man</div>
                    </div>
                </div>
                <p className="i-desc">
                    I design and develope services for customers of all sizes,
                    specializing in creating stylish, modern websites, web services
                    in online stores.
                </p>
            </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img 
            src="https://media.istockphoto.com/id/1171685515/ko/%EC%82%AC%EC%A7%84/%EB%82%9C%EC%9F%81%EC%9D%B4-%EB%AA%A8%ED%94%BC-%ED%96%84%EC%8A%A4%ED%84%B0%EB%8A%94-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%ED%94%BC%EB%8D%94-%EC%98%86%EC%97%90-%EC%9D%8C%EC%8B%9D%EC%9D%84-%EB%A8%B9%EB%8A%94%EB%8B%A4.jpg?b=1&s=612x612&w=0&k=20&c=42LhOZ50hprjixx0bJXF-OIoL7CYU3UfV2gNonxfvJM=" 
            alt="" 
            className="i-img" 
            />
        </div>
    </div>
  )
}

export default Intro;

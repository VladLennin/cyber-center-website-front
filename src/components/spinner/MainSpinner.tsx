import "./spinner.css"

const MainSpinner = () => {
    return (
        <div>
            <div className={"fixed flex h-screen w-screen z-50 items-center justify-center "}>
                <div className="pl ">
                    <svg className="pl__rings" viewBox="0 0 128 128" width="128px" height="128px">
                        <g fill="none" strokeLinecap="round" strokeWidth="4">
                            <g className="pl__ring" transform="rotate(0)">
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsla(223,90%,50%,0.3)"/>
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsla(223,90%,50%,0.5)"
                                         strokeDasharray="50 240"/>
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsl(223,90%,50%)"
                                         strokeDasharray="25 265"/>
                            </g>
                            <g className="pl__ring" transform="rotate(0)">
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsla(223,90%,50%,0)"/>
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsla(223,90%,50%,0.5)"
                                         strokeDasharray="50 240"/>
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsl(223,90%,50%)"
                                         strokeDasharray="25 265"/>
                            </g>
                            <g className="pl__ring" transform="rotate(0)">
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsla(223,90%,50%,0)"/>
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsla(223,90%,50%,0.5)"
                                         strokeDasharray="50 240"/>
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsl(223,90%,50%)"
                                         strokeDasharray="25 265"/>
                            </g>
                            <g className="pl__ring" transform="rotate(0)">
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsla(223,90%,50%,0)"/>
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsla(223,90%,50%,0.5)"
                                         strokeDasharray="50 240"/>
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsl(223,90%,50%)"
                                         strokeDasharray="25 265"/>
                            </g>
                            <g className="pl__ring" transform="rotate(180)">
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsla(223,90%,50%,0.3)"/>
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsla(223,90%,50%,0.5)"
                                         strokeDasharray="50 240"/>
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsl(223,90%,50%)"
                                         strokeDasharray="25 265"/>
                            </g>
                            <g className="pl__ring" transform="rotate(180)">
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsla(223,90%,50%,0)"/>
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsla(223,90%,50%,0.5)"
                                         strokeDasharray="50 240"/>
                                <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsl(223,90%,50%)"
                                         strokeDasharray="25 265"/>
                            </g>
                            <g className="pl__ring" transform="rotate(0)">
                                <ellipse className="pl__electron" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsl(0,0%,100%)"
                                         strokeDasharray="1 289" strokeWidth="8"/>
                                <ellipse className="pl__electron" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsl(0,0%,100%)"
                                         strokeDasharray="1 289" strokeWidth="8"/>
                            </g>
                            <g className="pl__ring" transform="rotate(180)">
                                <ellipse className="pl__electron" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsl(0,0%,100%)"
                                         strokeDasharray="1 289" strokeWidth="8"/>
                                <ellipse className="pl__electron" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsl(0,0%,100%)"
                                         strokeDasharray="1 289" strokeWidth="8"/>
                                <ellipse className="pl__electron" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsl(0,0%,100%)"
                                         strokeDasharray="1 289" strokeWidth="8"/>
                                <ellipse className="pl__electron" cx="64" cy="64" rx="60" ry="30"
                                         stroke="hsl(0,0%,100%)"
                                         strokeDasharray="1 289" strokeWidth="8"/>
                            </g>
                        </g>
                    </svg>
                    <div className="pl__nucleus">
                        <div className="pl__nucleus-particle"></div>
                        <div className="pl__nucleus-particle"></div>
                        <div className="pl__nucleus-particle"></div>
                        <div className="pl__nucleus-particle"></div>
                        <div className="pl__nucleus-particle"></div>
                        <div className="pl__nucleus-particle"></div>
                        <div className="pl__nucleus-particle"></div>
                        <div className="pl__nucleus-particle"></div>
                        <div className="pl__nucleus-particle"></div>
                        <div className="pl__nucleus-particle"></div>
                        <div className="pl__nucleus-particle"></div>
                        <div className="pl__nucleus-particle"></div>
                        <div className="pl__nucleus-particle"></div>
                    </div>

                </div>
            </div>
            <div className={"fixed z-10  h-screen w-screen   bg-gray-700 opacity-60"}/>

        </div>
    );

};

export default MainSpinner;

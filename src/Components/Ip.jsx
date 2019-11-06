import React, { Component } from "react";
import axios from "axios";
// import Loading from "./loading.js";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";

import { Card, CardGroup, Col, Row, Container } from "react-bootstrap";

export default class Ip extends Component {
    source = axios.CancelToken.source();
    mounted = false



    state = {
        address: null,
        done: undefined,
        city: null,
        info: "",
        weather: "",
        currency: "",
        location: "",
        timezone: "",
        latitude: "",
        longitude: "",
        emoji: "",
        langname: "",
        langnative: "",
        iplookup: "",
        ipgeo: "",
        currcode: "",
        currflag: "",
        moneykey: "",
        currcodeNn: "",
        currflagval: "",
        userinfo: "",
        browser: "",
        browser1: "",
        num5: "",
        comname: "",
        famven: "",
        comicon: "",
        macver: "",
        macurl: "",
        sunny:"",
        sunny1:"",
    };
    componentDidMount() {
        this._mounted = true;
        axios
            .get(`https://api.my-ip.io/ip.json`,
                // { cancelToken: this._source.token }
            )
            .then(res => {
                let address = res.data.ip;
                if (this._mounted) {

                    this.setState({ address });
                }

            }).then(res => {
                axios
                    .get(
                        `https://extreme-ip-lookup.com/json/${this.state.address}`)

                    .then(res => {
                        let iplookup = res.data;

                        if (this._mounted) {

                            this.setState({ iplookup });
                        }






                    }).then(res => {
                        axios
                            .get(
                                `https://api.ipgeolocation.io/ipgeo?apiKey=9edce9c262164e7f9035f544e7b7496c`)

                            .then(res => {
                                let ipgeo = res.data;
                                let currcode = ipgeo.currency.code;
                                let currcodeNn = ipgeo.currency.symbol;

                                if (this._mounted) {

                                    this.setState({ ipgeo, currcode, currcodeNn });
                                }







                            })
                            .then(res => {
                                axios
                                    .get(
                                        `http://api.ipstack.com/${this.state.address}?access_key=459cb79310c1697cc387e4edc0444b20&format=1`

                                    )
                                    // axios.get(`http://api.ipapi.com/api/${this.state.address}?access_key=2d3bcc99726987598aaae4c266a75f74`)

                                    .then(res => {
                                        let info = res.data;
                                        let city = info.city;
                                        let location = info.location.capital;
                                        let latitude = info.latitude;
                                        let longitude = info.longitude;
                                        let emoji = info.location.country_flag_emoji;
                                        let langname = info.location.languages[0].name;
                                        let langnative = info.location.languages[0].native;
                                        if (this._mounted) {

                                            this.setState({ city, info, location, latitude, longitude, emoji, langname, langnative });
                                        }


                                    })
                                    .then(res => {
                                        axios
                                            .get(
                                                `http://api.weatherstack.com/current?access_key=36e3c694224239f32b655ac68bfa9b81&query=${this.state.city}`
                                            )
                                            .then(res => {
                                                console.log(res)
                                                let weather = res.data;
                                                let sunny = weather.current.weather_descriptions;
                                                let sunny1 = Object.values(sunny) 
                                                if (this._mounted) {
                                                    this.setState({ weather,sunny , sunny1});

                                                }

                                                console.log(sunny1);


                                            });
                                    })
                                    .then(res => {
                                        axios
                                            .get(
                                                `http://apilayer.net/api/live?access_key=c8cbae64361e365dfe60818b771910b9&currencies=${this.state.currcode}&source=USD&format=1`
                                            )
                                            .then(res => {
                                                let currency = res.data;
                                                let currflag = currency.quotes;
                                                let moneykey = Object.keys(currflag)
                                                let num5 = Object.values(currflag)
                                                // let currflagval = currency.quotes.Object.keys(currflag);
                                                if (this._mounted) {

                                                    this.setState({ currency, currflag, moneykey, num5 });
                                                }

                                            });
                                    })
                                    .then(res => {

                                        // axios

                                        //     .get(
                                        //         `http://api.timezonedb.com/v2.1/get-time-zone?key=9AH6K7E39U2M&format=json&by=position&lat=${this.state.latitude}&lng=${this.state.longitude}`
                                        //     )
                                        //     .then(res => {
                                        //         let timezone = res.data;
                                        //         console.log(res)
                                        //         // if (this._mounted) {
                                        //             this.setState({ timezone });

                                        //         // }
                                        //         // this.setState({ done: true }));



                                        //     }).then(res => {

                                        axios

                                            .get(
                                                `http://api.userstack.com/api/detect?access_key=4f4408a7db0f444cba7457b87d979532&ua=Mozilla/5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_14_0)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/78.0.3904.70%20Safari/537.36`
                                            )
                                            .then(res => {
                                                let userinfo = res.data;
                                                let browser = userinfo.browser;
                                                let browser1 = Object.keys(browser);
                                                let comname = userinfo.browser.name;
                                                let famven = userinfo.os.family_vendor;
                                                let comicon = userinfo.os.icon;
                                                let macver = userinfo.os.name;
                                                let macurl = userinfo.os.url;
                                                if (this._mounted) {
                                                    this.setState({ comicon, macver, macurl, famven, userinfo, browser, browser1, comname, done: true });

                                                }




                                                // this.setState({ done: true }));
                                                // console.log(browser);
                                                // console.log(browser1);
                                                // console.log(browser1);

                                                // console.log(userinfo.os.Object.keys());


                                                // });
                                            });
                                    });
                            });
                    });
            });
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    render() {



        return (

            <div>
                <div>
                    <header className="App-header">
                        {!this.state.done ? (
                            <ReactLoading type={"bars"} color={"white"} />
                        ) : (




                                <CardGroup>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={this.state.info.location.country_flag} />
                                        <Card.Body>

                                            <Card.Title>You Are in : {this.state.emoji}</Card.Title>

                                            <Card.Text>
                                                <Row>

                                                    <Col>   <b>location: </b></Col>
                                                    <Col>                                                {this.state.info.country_name} of {this.state.info.continent_name}
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col><b>capital ciry:</b></Col>
                                                    <Col>   {this.state.location}</Col>
                                                </Row>
                                                <Row>
                                                    <Col>  <b>City:</b></Col>
                                                    <Col>   {this.state.iplookup.city}</Col>
                                                </Row>
                                                <Row>
                                                    <Col><b>languages :</b></Col>
                                                    <Col> {this.state.langname} | {this.state.langnative}
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col><b>call Key:</b></Col>
                                                    <Col>+{this.state.info.location.calling_code}</Col>
                                                </Row>
                                                <Row>
                                                    <Col> <b>currency name:</b></Col>
                                                    <Col> {this.state.ipgeo.currency.name}</Col>
                                                </Row>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Connection information</Card.Title>
                                            <Card.Text>
                                                <Row>
                                                    <Col> <b>Your Public IP :</b> </Col>
                                                    <Col>  {this.state.address}</Col>
                                                </Row>
                                                <Row>
                                                    <Col><b>Type :</b> </Col>
                                                    <Col> {this.state.info.type}</Col>
                                                </Row>

                                                <Row>

                                                    <Col><b>connection type :</b></Col>
                                                    <Col>  {this.state.ipgeo.connection_type}</Col>
                                                </Row>
                                                <Row>

                                                    <Col><b> Proxies type :</b></Col>
                                                    <Col>  {this.state.iplookup.ipType}</Col>
                                                </Row>
                                                <Row>

                                                    <Col>  <b>Domain Example :</b></Col>
                                                    <Col>domain.com<b>{this.state.ipgeo.country_tld}</b></Col>
                                                </Row>
                                                <Row>

                                                    <Col><b>isp :</b></Col>
                                                    <Col>   {this.state.iplookup.isp}</Col>
                                                </Row>



                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Body>
                                            <Card.Title>Device information</Card.Title>
                                            <Card.Text>
                                                <Row>
                                                    <Col> <b>Brand :</b> </Col>
                                                    <Col>
                                                        <Card.Img src={this.state.comicon} style={{ width: "16px", height: "16px" }} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col><b>Company name :</b> </Col>
                                                    <Col>{this.state.famven}</Col>
                                                </Row>
                                                <Row>

                                                    <Col><b>Operating system</b></Col>
                                                    <Col>mac os</Col>
                                                </Row>
                                                <Row>

                                                    <Col><b>version</b></Col>
                                                    <Col>{this.state.macver}</Col>
                                                </Row>
                                                <Row>

                                                    <Col><b>browser</b></Col>
                                                    <Col>{this.state.comname}</Col>
                                                </Row>
                                                <Row>

                                                    <Col>  <b>version</b></Col>
                                                    <Col>{this.state.browser.version}</Col>
                                                </Row>
                                                <Row>


                                                    <Col><a href={this.state.macurl} target="_blank">read More About {this.state.macver}</a></Col>
                                                </Row>



                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Weather</Card.Title>
                                            <Card.Text>
                                                <Container>
                                                    <Row>
                                                        {/* <Col>sunny</Col> */}
                                                        {/* <Col>33°c</Col> */}
                                                        <Col><Card.Img className="sizeimg" src={this.state.weather.current.weather_icons}  style={{width: "32px", height: "32px"}} /> <br /> {this.state.sunny1}</Col> 
                                                        <Col>{this.state.weather.current.temperature}°c</Col>
                                                    </Row>





                                                </Container>
                                            </Card.Text>

                                        </Card.Body>
                                        <Card.Body>
                                            <Card.Text>
                                                <Card.Title>Currency</Card.Title>

                                                <Container>
                                                    <Row>
                                                        <Col>your currency</Col>
                                                        <Col>To</Col>
                                                        <Col>US Dollar</Col>


                                                    </Row>
                                                    <Row>
                                                        <Col>{this.state.num5} {this.state.currcode} | {this.state.currcodeNn} </Col>
                                                        <Col> </Col>
                                                        <Col>1 $ USD</Col>
                                                    </Row>
                                                </Container>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>

                                            <small className="text-muted">Last updated  {this.state.weather.current.observation_time} </small>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            )}
                    </header>
                </div>
            </div>
        );



    }
}


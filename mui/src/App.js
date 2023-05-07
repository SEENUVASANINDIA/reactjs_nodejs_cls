import './App.css';
import { Grid, styled, IconButton, Avatar, Button, CardHeader, Box, Card, CardActions, CardContent, Typography, } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
// import spinimg1 from "./assets/spin.png";
import groupimg from "./assets/Group 255.svg";
import Rectangle1 from "./assets/Rectangle_1.svg";
import flutterimg from "./assets/flutter.png";
import pythonimg from "./assets/python.png";
import dockerimg from "./assets/docker.png";
import reactimg from "./assets/react.png";
import wordpressimg from "./assets/wordpress.png";
import bootstarpimg from "./assets/bootstarp.png";
import instagram from "./assets/insta.svg";
import linkedin from "./assets/linked.svg";
import twiter from "./assets/tweet.svg";
import { red } from '@mui/material/colors';



// import { WiLightning } from 'react-icons/wi';
// import { FaBuffer } from 'react-icons/fa';
function App() {
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));
  return (
    <div>


      <Box
        sx={{


          width: 1300,
          height: 90,
          gap: 2,
          margin: 4,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />


      <Box
        sx={{
          display: "flex",
          height: "100",

          justifyContent: "center",
          justifyItems: "center",
          flexDirection: "column",
          // gap: "0rem"
          // rowGap:"9rem",
          // columnGap:"9rem",
          margin: 15,
          backgroundColor: 'chocolate',

        }}
      >

        <Card variant="outlined" sx={{ minWidth: 275, width: 500 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontSize: 22, color: "blue" }} color="text.secondary" gutterBottom="true">

              We create digital products that export Silicon    </Typography>
            <Typography variant="h5" sx={{ fontSize: 22, color: "blue" }} gutterBottom="true">

              valley to the world
            </Typography>



            <Typography variant="body2">
              We design and create tailor-made business <br />
              applications focused on Customer Experience <br />
              and long-term Business Growth on Web, Mobile <br />
              & Blockchain, We use technology based on your <br />
              product requirement with less development &<br />
              maintenance cost, faster time-to-market.

            </Typography>

          </CardContent>
          <CardActions>
            <Button variant="contained" sx={{ mr: 10, ml: 3 }}>Contained</Button>
            <Button variant="outlined" >Outlined</Button>
          </CardActions>
        </Card>
        <br /><br />
        {/* <Typography variant="h5" sx={{ ml: 10, fontSize: 22, color: "blue" }} gutterBottom="true">

        Our Business
      </Typography> */}

        <Box

          sx={{


            // width: 1100,
            height: 90,
            gap: 2,
            margin: 10,
            // ml: 18,
            display: "flex",
            flexDirection: "row",
            backgroundColor: 'primary.light',
            borderRadius: "50px "

          }}

        >


          <Typography variant="h5" sx={{ margin: 3, width: 200, fontSize: 22, color: "blue", borderRadius: "50px ", backgroundColor: 'primary.dark', justifyContent: "center", }} gutterBottom="true">

            Our Business
          </Typography>
          <Typography variant="h5" sx={{ margin: 3, width: 200, fontSize: 22, color: "blue", borderRadius: "50px ", backgroundColor: 'primary.dark', }} gutterBottom="true">

            Our Business
          </Typography>
          <Typography variant="h5" sx={{ margin: 3, width: 200, fontSize: 22, color: "blue", borderRadius: "50px ", backgroundColor: 'primary.dark', }} gutterBottom="true">

            Our Business
          </Typography>
          <Typography variant="h5" sx={{ margin: 3, width: 200, fontSize: 22, color: "blue", borderRadius: "50px ", backgroundColor: 'primary.dark', }} gutterBottom="true">

            Our Business
          </Typography>


          {/* <Typography variant="h5" sx={{ margin:3, width:200, fontSize: 22, color: "blue" ,borderRadius:"50px ", backgroundColor: 'primary.light',}} gutterBottom="true">

Our Business
</Typography> */}

        </Box>


        <Card variant="outlined" sx={{ minWidth: 275, width: 400, }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontSize: 22, color: "blue" }} color="text.secondary" gutterBottom="true">

              Minimum Viable Product   </Typography>
            <Typography variant="body2">
              MVP, is a product with enough features to <br />
              attract early-adopter customers and validate<br />
              a product idea early in the product <br />
              development cycle.

            </Typography>
            <br />
            <Typography variant="body2">
              MVP, is a product with enough features to <br />
              attract early-adopter customers and validate<br />
              a product idea early in the product <br />
              development cycle.

            </Typography>
            <br />
            <Typography variant="body2">
              MVP, is a product with enough features to <br />
              attract early-adopter customers and validate<br />
              a product idea early in the product <br />
              development cycle.

            </Typography>
            <br />
            <Typography variant="body2">
              MVP, is a product with enough features to <br />
              attract early-adopter customers and validate<br />
              a product idea early in the product <br />
              development cycle.

            </Typography>
            <br />

          </CardContent>

        </Card>
        <Typography variant="h5" sx={{ ml: 50, mt: 6, fontSize: 22, color: "blue" }} gutterBottom="true">

          Learn about Sagasoft expertise.

        </Typography>



        <Box

          sx={{


            ml: 1,
            mt: 8

          }}

        >

          <img src={groupimg} alt="groupimg" height={600} width={1000} />
          <Typography variant="h5" sx={{ ml: 0, mt: 3, fontSize: 22, color: "blue" }} gutterBottom="true">
            Our expertise in industry

          </Typography>

          <Typography variant="h5" sx={{ ml: 0, mt: 3, fontSize: 22, color: "blue" }} gutterBottom="true">
            The base performance of your product relies on your tech stack. We use technology
            based on your product requirement with less development & maintenance cost, faster
            time-to-market, without compromising  in scalability and security.

          </Typography>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          gap: "0rem",
          // backgroundColor: 'primary.dark',
          minWidth: 350,
        }}>


          <Card variant="outlined" sx={{ mt: 2.5, ml: 1, minWidth: 275, width: 503, height: 206 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontSize: 22, color: "blue", }} color="text.secondary" gutterBottom="true">

                We create digital products that export Silicon
              </Typography>



              <Typography variant="body2">
                We design and create tailor-made business <br />
                applications focused on Customer Experience <br />
                and long-term Business Growth on Web, Mobile <br />
                & Blockchain, We use technology based on your <br />


              </Typography>

            </CardContent>
            <CardActions>
              <Button variant="contained" sx={{ mr: 10, ml: 3 }}>Contained</Button>

            </CardActions>
          </Card>
          <img src={Rectangle1} alt="Rectangle1" height={250} width={500} />

          {/* <Box> Login </Box>
          <Box> Login </Box>
          <TextField label="name" /> */}

        </Box>




        <Box sx={{
          display: "flex",
          flexDirection: "row",
          // height: "100%",
          // gap: "9em",
          // rowGap:"9rem",
          columnGap: "9rem",

          // backgroundColor: 'black',
          minWidth: 350,
          mt: 12,
          ml: 12,
          mr: 12,

          // justifyContent: "center",


        }}>

          <img src={flutterimg} alt="flutter" height={100} width={200} />
          <img src={reactimg} alt="react" height={100} width={200} />
          <img src={pythonimg} alt="python" height={100} width={200} />
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          // gap: "9em",
          columnGap: "9rem",

          // backgroundColor: 'chocolate',
          minWidth: 350,
          mt: 6,
          ml: 12,
          mr: 12,
        }}>

          <img src={bootstarpimg} alt="flutter" height={100} width={200} />
          <img src={dockerimg} alt="react" height={100} width={200} />
          <img src={wordpressimg} alt="python" height={100} width={200} />
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          // gap: "9em",
          columnGap: "2rem",

          // backgroundColor: 'chocolate',
          minWidth: 350,
          mt: 6,
          ml: 1,
          mr: 1,
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            // gap: "9em",
            // columnGap: "9rem",

            // backgroundColor: 'chocolate',
            minWidth: 300,
            mt: 1,
            ml: 1,
            mr: 1,
          }}>


            <Card variant="outlined" sx={{ mt: 1, ml: 1, minWidth: 275, width: 100, height: 220 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} >
                    <img src={instagram} alt="instgram" />
                  </Avatar>
                }
                action={
                  <Typography variant="h5" sx={{ fontSize: 13, color: "GrayText", mt: 2 }} color="text.secondary" gutterBottom="true">

                    12:12 pm dc 21/22
                  </Typography>
                }

              // subheader="September 14, 2016"
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontSize: 15, }} color="text.secondary" gutterBottom="true">

                  Sagasoft now in Instagram! Follow us to get updates! #Sagasoft #Power_to_the_people
                </Typography>




              </CardContent>
              <CardActions>
                <Typography variant="h5" sx={{ fontSize: 13, color: "GrayText", mt: 2, mr: 11 }} color="text.secondary" gutterBottom="true">

                  @Sagasoft
                </Typography>
                <IconButton aria-label="add to favorites" >
                  <OpenInNew />
                </IconButton>

              </CardActions>
            </Card>

            <Card variant="outlined" sx={{ mt: 1, ml: 1, minWidth: 275, width: 100, height: 220 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} >
                    <img src={instagram} alt="instgram" />
                  </Avatar>
                }
                action={
                  <Typography variant="h5" sx={{ fontSize: 13, color: "GrayText", mt: 2 }} color="text.secondary" gutterBottom="true">

                    12:12 pm dc 21/22
                  </Typography>
                }

              // subheader="September 14, 2016"
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontSize: 15, }} color="text.secondary" gutterBottom="true">

                  Sagasoft now in Instagram! Follow us to get updates! #Sagasoft #Power_to_the_people
                </Typography>




              </CardContent>
              <CardActions>
                <Typography variant="h5" sx={{ fontSize: 13, color: "GrayText", mt: 2, mr: 11 }} color="text.secondary" gutterBottom="true">

                  @Sagasoft
                </Typography>
                <IconButton aria-label="add to favorites" >
                  <OpenInNew />
                </IconButton>

              </CardActions>
            </Card>

          </Box>

          <Card variant="outlined" sx={{ mt: 2.5, ml: 1, minWidth: 275, width: 100, height: 440 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} >
                  <img src={instagram} alt="instgram" />
                </Avatar>
              }
              action={
                <Typography variant="h5" sx={{ fontSize: 13, color: "GrayText", mt: 2 }} color="text.secondary" gutterBottom="true">

                  12:12 pm dc 21/22
                </Typography>
              }

            // subheader="September 14, 2016"
            />
            <CardContent>
              <Typography variant="h5" sx={{ fontSize: 15, }} color="text.secondary" gutterBottom="true">

                Sagasoft has entered into an agreement to acquire AustinCSI.
                This acquisition will add over 175 experienced consultants to our
                Sagasoft has entered into an agreement to acquire AustinCSI.
                This acquisition will add over 175 experienced consultants to our
                Technology consulting practice to provide clients with capabilities
                and solutions to modernize their business
                #Sagasoft #Power_to_the_People
              </Typography>




            </CardContent>
            <CardActions>
              <Typography variant="h5" sx={{ fontSize: 13, color: "GrayText", mt: 2, mr: 11 }} color="text.secondary" gutterBottom="true">

                @Sagasoft
              </Typography>
              <IconButton aria-label="add to favorites" >
                <OpenInNew />
              </IconButton>

            </CardActions>
          </Card>

          <Card variant="outlined" sx={{ mt: 2.5, ml: 1, minWidth: 275, width: 100, height: 440 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} >
                  <img src={instagram} alt="instgram" />
                </Avatar>
              }
              action={
                <Typography variant="h5" sx={{ fontSize: 13, color: "GrayText", mt: 2 }} color="text.secondary" gutterBottom="true">

                  12:12 pm dc 21/22
                </Typography>
              }

            // subheader="September 14, 2016"
            />
            <CardContent>
              <Typography variant="h5" sx={{ fontSize: 15, }} color="text.secondary" gutterBottom="true">

                Sagasoft has entered into an agreement to acquire AustinCSI.
                Sagasoft has entered into an agreement to acquire AustinCSI.
                This acquisition will add over 175 experienced consultants to our
                This acquisition will add over 175 experienced consultants to our
                Technology consulting practice to provide clients with capabilities
                and solutions to modernize their business
                #Sagasoft #Power_to_the_People
              </Typography>




            </CardContent>
            <CardActions>
              <Typography variant="h5" sx={{ fontSize: 13, color: "GrayText", mt: 2, mr: 11 }} color="text.secondary" gutterBottom="true">

                @Sagasoft
              </Typography>
              <IconButton aria-label="add to favorites" >
                <OpenInNew />
              </IconButton>

            </CardActions>
          </Card>
        </Box>



      </Box>

    </div>
  );

}

export default App;

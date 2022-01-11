import React from 'react';
import {Grid,Card,CardHeader,CardMedia,CardContent,CardActions,Typography,Link,Container,CircularProgress} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import useStyles from './countriesStyles';
import altImage from './india.png';

export const Countries = () => {
    const classes = useStyles();
    const countries = useSelector((state)=>state.data.countries);
    const load = useSelector((state)=>state.data.load); 
    const error = useSelector((state)=>state.data.error);

    return(
        <Container component="main" className={classes.root} maxWidth="lg">
            { error ? <p>"Error Occurred </p> :
        <Grid container spacing={2} className={classes.grid}>
            { load || !countries ? <CircularProgress/> : 
                countries.map((country)=>
          <Grid item xs={12} sm={6} md={4} >
            <Card className={classes.card}>
              <CardHeader
                className={classes.cardTitle}
                title={country.name.common}
                subheader={country.name.official}
              ></CardHeader>
              <CardContent>
                <Typography>
                  {"Capital : " + country.capital}
                </Typography>
              </CardContent>
              <div className={classes.imageDiv}>
                <img className={classes.image} src={country.flags.png} ></img>
              </div>
              <CardContent>
                <Typography>
                  {"Region : " + country.region}
                </Typography>
                <Typography>
                  {"Sub - Region : " + country.subregion}
                </Typography>
                <Typography>
                  {"Population : " + country.population}
                </Typography>
                <Typography>
                  { country.borders ?  "Borders : "+country.borders.map((b)=>b+" ") :  "No Borders"}
                </Typography>
                <Typography>
                  {/* { country.languages ?  "Languages : "+Object.values(country.languages).forEach(lang=>lang+" ") :  "No Languages"} */}
                  { country.languages ?  
                    "Languages : "+ Object.keys(country.languages).map((lang)=>lang+" ") : "No Languages"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
                )}
      </Grid>
        }
      </Container>
    );
}
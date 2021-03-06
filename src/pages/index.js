import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import Button from "@material-ui/core/Button"
import data from "./index/data"

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 500,
  },
  center: {
    justifyContent: "center",
  },
  float: {
    position: "fixed",
    top: 100,
    right: 30,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <>
      <SEO title="Welcome to SEAMEO SEN Publication Site" />
      <Grid container spacing={2}>
        {data.conferences.map((conference, j) => (
          <Grid key={j} item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={conference.confImgCover}
                title={conference.confName}
              />
              <CardHeader
                title={conference.confName}
                subheader={conference.confTheme}
              />
              <CardContent>{conference.place}</CardContent>
              <CardActions className={classes.center}>
                <Button
                  size="large"
                  color="primary"
                  component={Link}
                  to={conference.page}
                  variant="contained"
                  startIcon={<MenuBookIcon />}
                >
                  READ MORE
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className={classes.float}>
        <a
          href="https://www.trendcounter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.trendcounter.com/w/track/04b9173500.png"
            alt="Web Analytics"
          />
        </a>
      </div>
    </>
  )
}

export default IndexPage

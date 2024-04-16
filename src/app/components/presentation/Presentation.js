import { Avatar, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import myAvatar from '@assets/img/avatar.png';
import front from '@assets/img/techs/front.png';
import back from '@assets/img/techs/back.png';
import { Box } from "@mui/system";

export default function Presentation() {
    const t = useTranslations("Main");
    return (
        <div className="presentation-box">
            <Grid container sx={{ display: "flex" }}>
                <Grid item xs={12} md={6} lg={9} >
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 1,
                            fontWeight: 400,
                            letterSpacing: '.1rem',
                            color: 'white',
                        }}
                        className="add-margin"
                    >
                        {t('paragraph1')}
                    </Typography>
                    <Typography
                        variant="h3"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 1,
                            fontWeight: 800,
                            transform:"scaleY(0.8)",
                            color: '#0B5243',
                            transform: { scaleY: 0.8 }
                        }}
                    >
                        {t('title1')}
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 1,
                            fontWeight: 400,
                            letterSpacing: '.1rem',
                            color: 'white',
                            marginTop: "8vh"
                        }}
                    >
                        {t.rich('paragraph2', {
                            span: (chunks) => <span> {chunks}</span>,
                            color: (chunks) => <span className="u-color-green"> {chunks}</span>
                        })}
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 1,
                            fontWeight: 400,
                            letterSpacing: '.1rem',
                            color: 'white',
                        }}
                    >
                        {t.rich('paragraph3', {
                            span: (chunks) => <span> {chunks}</span>,
                            bold: (chunks) => <b> {chunks}</b>
                        })}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={3} justifyContent={"center"} alignItems={"center"} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <img
                        src={myAvatar.src}
                        alt={"Nathan Lepron"}
                        loading="lazy"
                        className="avatar-image"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12} lg={12} sx={{ marginTop: "7vh" }}>
                    <Typography
                        variant="h4"
                        textAlign={"center"}
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            fontWeight: 400,
                            letterSpacing: '.1rem',
                            color: 'white',
                        }}
                    >
                        {t.rich('title_component', {
                            bold: (chunks) => <b> {chunks}</b>
                        })}
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={12} sx={{ marginTop: "4vh" }}>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, backgroundColor: "#0B5243", padding: "2%", borderRadius: "40px", color: "white", boxShadow: "0px 0px 50px -3px rgba(0,0,0,0.8)" }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} lg={2}>
                                <img
                                    src={front.src}
                                    alt={"Interface"}
                                    loading="lazy"
                                />
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Typography
                                    variant="h6"
                                    textAlign={"center"}
                                    sx={{
                                        display: { xs: 'none', md: 'block' },
                                        fontWeight: 400,
                                        letterSpacing: '.1rem',
                                        color: 'white',
                                        margin:"1%"
                                    }}
                                >
                                    {t.rich('title_component_front', {
                                        bold: (chunks) => <b> {chunks}</b>
                                    })}
                                </Typography>
                                <Typography
                                    variant="p"
                                    textAlign={"center"}
                                    sx={{
                                        display: { xs: 'none', md: 'block' },
                                        fontWeight: 400,
                                        lineHeight:"1.3rem",
                                        letterSpacing: '.1rem',
                                        color: 'white',
                                        margin:"4vh 1vw 0vh 1vw"
                                    }}
                                >
                                    {t('comment_component_front')}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={4} sx={{borderLeft:"3px solid #747474"}}>
                                <Typography
                                    variant="h6"
                                    textAlign={"center"}
                                    sx={{
                                        display: { xs: 'none', md: 'block' },
                                        fontWeight: 400,
                                        letterSpacing: '.1rem',
                                        color: 'white',
                                        margin:"1%"
                                    }}
                                >
                                    {t.rich('title_component_back', {
                                        bold: (chunks) => <b> {chunks}</b>
                                    })}
                                </Typography>
                                <Typography
                                    variant="p"
                                    textAlign={"center"}
                                    sx={{
                                        display: { xs: 'none', md: 'block' },
                                        fontWeight: 400,
                                        lineHeight:"1.3rem",
                                        letterSpacing: '.1rem',
                                        color: 'white',
                                        margin:"4vh 1vw 0vh 1vw"
                                    }}
                                >
                                    {t('comment_component_back')}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <img
                                    src={back.src}
                                    alt={"Configuration"}
                                    loading="lazy"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
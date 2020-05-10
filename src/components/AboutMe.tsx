import React, { useState } from 'react';
import { Grid, Avatar, Typography, Snackbar, makeStyles, Theme, createStyles, Button } from '@material-ui/core';
import CopyToClipboard from 'react-copy-to-clipboard';
import me from '../imgs/profile.png'
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link, useLocation } from 'react-router-dom';
import { loadStripe, Stripe } from '@stripe/stripe-js'
import { Helmet } from 'react-helmet';

const useStyle = makeStyles((theme: Theme) => createStyles({
    div: {
        color: "white",
        padding: "20px"
    }
}))

export default function AboutMe() {
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const classes = useStyle()
    const currentUrl: string = "https://liveslives.net" + useLocation().pathname

    const stripePromise: Promise<Stripe | null> = loadStripe("pk_live_Oxz7C2y72wh28u3p4ti6rd0U00Q9wmXnVW");

    const handleClick5482 =
        async (event: any) => {
            const stripe = await stripePromise
            await stripe?.redirectToCheckout({
                items: [{ sku: "sku_HEGoJeBujGcMj0", quantity: 1 }],
                successUrl: 'https://liveslives.net/rescue',
                cancelUrl: 'https://liveslives.net/rescue',
            }).catch(err => console.log(err.message))//エラーはとりあえずコンソールに出力する
        }

    const handleClick843 =
        async (event: any) => {
            const stripe = await stripePromise
            await stripe?.redirectToCheckout({
                items: [{ sku: "sku_HEGqDqUZ5N5GtV", quantity: 1 }],
                successUrl: 'https://liveslives.net/rescue',
                cancelUrl: 'https://liveslives.net/rescue',
            }).catch(err => console.log(err.message))//エラーはとりあえずコンソールに出力する
        }

    const handleClick110 =
        async (event: any) => {
            const stripe = await stripePromise
            await stripe?.redirectToCheckout({
                items: [{ sku: "sku_HEGqv5OXgWplIL", quantity: 1 }],
                successUrl: 'https://liveslives.net/rescue',
                cancelUrl: 'https://liveslives.net/rescue',
            }).catch(err => console.log(err.message))//エラーはとりあえずコンソールに出力する
        }

    return (
        <div className={classes.div}>
            <Grid item container direction="column" justify="center" alignItems="center" spacing={1}>
                <Grid item>
                    <Avatar src={me} alt="profile image" style={{ width: "20vh", height: "20vh" }} />
                </Grid>
                <Grid item>
                    <CopyToClipboard text={"panteranerow.dev@gmail.com"} onCopy={() => setTooltipOpen(true)}>
                        <MailIcon />
                    </CopyToClipboard>
                    <a href="https://twitter.com/IkkoKojima"><TwitterIcon style={{ color: "white" }} /></a>
                    <a href="https://www.facebook.com/ikko.kojoma/"><FacebookIcon style={{ color: "white" }} /></a>
                </Grid>
                <Grid item >
                    <Typography variant="caption" >
                        IKKO Kojima : このアプリの開発者
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant="caption" >
                        会社に努めながら個人でアプリ開発をする23歳。
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant="caption" >
                        幼少期の趣味は魚図鑑の写経、現在の趣味は魚釣り。
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant="caption" >
                        昨今の新型コロナウィルスの騒動で水族館が次々閉園し
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant="caption" >
                        生き物を間引く可能性があるというニュースを知り
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant="caption" >
                        いてもたってもいられずこのアプリを作った。
                    </Typography>
                </Grid>
                <br />
                <br />
                <Grid item >
                    <Typography variant="body2" >
                        現在私は、コロナショックを受けた水族館と生き物たちの力になるためのプロジェクトを進行中です。
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant="body2" >
                        水族館と提携し、生き物を撮影して動画と生放送でバーチャルな水族館を作り上げるという計画です。
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant="body2" >
                        これにより収益を得て、それを水族館に還元することで、力になれるのではと考えています。
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant="body2" >
                        しかしそのためには、水族館に贈るカメラを購入したり、開発のための人を雇ったり、お金が必要になります。
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant="body2" >
                        計画に賛同してくださる方は、ジュース1本ぶんのお金でも構いません、ご支援いただけないでしょうか。
                    </Typography>
                </Grid>
                <Grid item>
                    <div style={{
                        backgroundImage: "url(https://source.unsplash.com/gULJzSnDuZU)",
                        backgroundSize: "cover",
                        backgroundPosition: 'center 50%',
                    }}>
                        <Button
                            style={{
                                backgroundColor: "rgba(0,0,0,0.5)",
                                width: "80vw",
                                height: "15vh",
                                color: "white",
                                outline: "5px double white",
                                outlineOffset: "-20px"
                            }}
                            variant="outlined"
                            onClick={handleClick5482}
                        >
                            ¥5,482(ごおじゃす)コースで支援
                            </Button>
                    </div>
                </Grid>
                <Grid item>
                    <div style={{
                        backgroundImage: "url(https://source.unsplash.com/poly_hmhwJs)",
                        backgroundSize: "cover",
                        backgroundPosition: 'center 50%',
                    }}>
                        <Button
                            style={{
                                backgroundColor: "rgba(0,0,0,0.5)",
                                width: "60vw",
                                height: "10vh",
                                color: "white",
                                outline: "5px double white",
                                outlineOffset: "-15px"
                            }}
                            variant="outlined"
                            onClick={handleClick843}
                        >
                            ¥843(やさしさ)コースで支援
                            </Button>
                    </div>
                </Grid>
                <Grid item>
                    <div style={{
                        backgroundImage: "url(https://source.unsplash.com/uGPBqF1Yls0)",
                        backgroundSize: "cover",
                        backgroundPosition: 'center 53%',

                    }}>
                        <Button
                            style={{
                                backgroundColor: "rgba(0,0,0,0.5)",
                                width: "40vw",
                                height: "8vh",
                                color: "white",
                                outline: "5px double white",
                                outlineOffset: "-5px"
                            }}
                            variant="outlined"
                            onClick={handleClick110}
                        >
                            ¥110(いいひと)コースで支援
                            </Button>
                    </div>
                </Grid>
                <Grid item >
                    <Typography variant="body2" >
                        右下のボタンからシェアもしていただけると幸いです。
                    </Typography>
                </Grid>
                <br />
                <br />
                <Grid item>
                    <Link to="/">
                        <Button style={{ color: "white" }} variant="outlined">アプリに戻る</Button>
                    </Link>
                </Grid>
                <br />
                <br />
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                message="メールアドレスのコピーに成功しました"
                open={tooltipOpen}
                autoHideDuration={2000}
                onClose={() => setTooltipOpen(false)}
            />
            <Helmet
                meta={[
                    { property: 'og:title', content: "水族館救済プロジェクト|Lives:Lives" },
                    { property: 'og:type', content: 'article' },
                    { property: 'og:url', content: currentUrl },
                ]}
            />
        </div>
    )
}
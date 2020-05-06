import React from 'react';
import { makeStyles, Theme, createStyles, Typography, Grid, Avatar, Button } from '@material-ui/core';
import ButtonWithImg from './ButtonWithImg';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useHistory } from 'react-router-dom';
import { loadStripe, Stripe } from '@stripe/stripe-js'
import profile_img from "../imgs/profile.png"

const useStyle = makeStyles((theme: Theme) => createStyles({
    avatar: {
        width: "15vw",
        height: "15vw"
    },
    bg: {
        background: "rgba(256, 256, 256, 0.5)"
    }
}))

export default function CourceChoice() {
    const classes = useStyle()
    const history = useHistory()

    const image5482 = {
        url: "https://source.unsplash.com/QJbyG6O0ick/1920x1080",
        title: "『ごおじゃす』コース",
        title2: "¥5,482",
        style: { width: "90vw", height: "15vh" }
    }

    const image843 = {
        url: "https://source.unsplash.com/Lq4kbAZ8SdU/1920x1280",
        title: "『やさしさ』コース",
        title2: "¥843",
        style: { width: "70vw", height: "10vh" }
    }

    const image110 = {
        url: "https://source.unsplash.com/Z05GiksmqYU/1920x1271",
        title: "『いいひと』コース",
        title2: "¥110",
        style: { width: "40vw", height: "8vh" }
    }

    const stripePromise: Promise<Stripe | null> = loadStripe(process.env.PK ? process.env.PK : "");//IDを書き換えてください

    const handleClick5482 =
        async (event: any) => {
            const stripe = await stripePromise
            await stripe?.redirectToCheckout({
                items: [{ sku: process.env.SKU_5482, quantity: 1 }],
                successUrl: 'https://liveslives.net/rescue',
                cancelUrl: 'https://liveslives.net/rescue',
            }).catch(err => console.log(err.message))//エラーはとりあえずコンソールに出力する
        }

    const handleClick843 =
        async (event: any) => {
            const stripe = await stripePromise
            await stripe?.redirectToCheckout({
                items: [{ sku: process.env.SKU_843, quantity: 1 }],
                successUrl: 'https://liveslives.net/rescue',
                cancelUrl: 'https://liveslives.net/rescue',
            }).catch(err => console.log(err.message))//エラーはとりあえずコンソールに出力する
        }

    const handleClick110 =
        async (event: any) => {
            const stripe = await stripePromise
            await stripe?.redirectToCheckout({
                items: [{ sku: process.env.SKU_110, quantity: 1 }],
                successUrl: 'https://liveslives.net/rescue',
                cancelUrl: 'https://liveslives.net/rescue',
            }).catch(err => console.log(err.message))//エラーはとりあえずコンソールに出力する
        }

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
            style={{ padding: 15 }}
        >
            <Grid item container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.bg}
            >
                <Grid item>
                    <Typography variant="subtitle1">ジュース1本分の善意を持ち寄って</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6">命を助けるクラウドファンディング</Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="subtitle2">昨今の新型コロナウィルスの流行によって、全国の動物園や水族館は感染拡大防止のために<strong>開園することができない状況</strong>にあります。</Typography>
            </Grid>
            <Grid item>
                <Typography variant="subtitle2">収入がなく経営が立ち行かなくなる。これを避けるために<strong>動物の口減らし(殺処分)が目前</strong>に迫っています。</Typography>
            </Grid>
            <Grid item container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Typography variant="subtitle1">これは絶対に避けなければいけません！</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">動物好きの皆さんのチカラを貸してください！</Typography>
                </Grid>
            </Grid>
            <Grid item>
                <ButtonWithImg image={image5482} handleClick={handleClick5482} />
            </Grid>
            <Grid item>
                <Typography variant="caption">ゲームソフト1本分で援助できます</Typography>
            </Grid>
            <Grid item >
                <ButtonWithImg image={image843} handleClick={handleClick843} />
            </Grid>
            <Grid item>
                <Typography variant="caption">外食1回分で援助できます</Typography>
            </Grid>
            <Grid item>
                <ButtonWithImg image={image110} handleClick={handleClick110} />
            </Grid>
            <Grid item>
                <Typography variant="caption">ジュース1本分で援助できます</Typography>
            </Grid>
            <Grid
                item
                container
                spacing={1}
                alignItems="center"
                className={classes.bg}
            >
                <Grid item xs={2} container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <Avatar alt="小島 一晃" src={profile_img} className={classes.avatar} />
                    </Grid>
                    <Grid item>
                        <a href="https://twitter.com/IkkoKojima"><TwitterIcon /></a>
                        <a href="https://www.facebook.com/ikko.kojoma"><FacebookIcon /></a>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={10}
                    container
                    direction="column"
                    justify="center"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Grid item >
                        <Typography variant="subtitle1">僕が責任を持って、皆さんから預かったお金を国内の動物園/水族館に届けます</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2">初めまして。このサイトを立ち上げた小島一晃といいます。私は幼少から生き物が好きで、暇があれば図鑑をみてお絵かきをしていました。初めて訪れた動物園では生き物を見て、触れて、感動した記憶があります。</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2">そんな中、新型コロナウィルスが流行し、ニュースで全世界の動物園や水族館が閉園し、そして困窮しているということを知りました。</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2">しかし、社会人2年目の僕ひとりでは1日5キロの肉を食べるトラの1ヶ月の餌代(1頭当たり約10万円)ですら支えることができません...</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2">では、自分にできることはなんだろう、考えた結果がこのサイトです。</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2">外出できない日々に閉塞感を抱いている人はココでたくさんの動物たちに触れて、癒されていってください。そしてぜひ、彼らに還元するための手伝いをしていただけないでしょうか。</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Button onClick={() => history.goBack()} variant="outlined">戻る</Button>
        </Grid>
    )
}
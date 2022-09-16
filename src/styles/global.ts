import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        color: white;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    :root {
        --principal-color-00: #1E2333;
        --principal-color-01: #2A3249;
        --principal-color-02: #2995B7;

        --font-size-logo: 28px;

        --font-size-mobile-title: 20px;
        --font-size-mobile-text: 16px; 
        --font-size-mobile-dropdown: 28px; 

        --font-size-desktop-title: 36px; 
        --font-size-desktop-text: 24px; 
    }
    body {
        width: 100vw;
        min-height: 100vh;
        line-height: 1;
        background-color: var(--principal-color-00);
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export const DefaultContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 15px;
`;

export const DefaultContent = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
`;
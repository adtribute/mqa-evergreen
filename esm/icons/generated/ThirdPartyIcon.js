import _extends from "@babel/runtime/helpers/esm/extends";
import React, { memo, forwardRef } from 'react';
import Icon from '../src/Icon';
var svgPaths16 = ['M4.448 9h.573c.025-.044.051-.088.079-.13A9.43 9.43 0 015.183 8h-.995A10.424 10.424 0 014 6c0-.717.068-1.391.188-2h3.624c.065.33.114.678.146 1.042A3.42 3.42 0 018.46 5c.168 0 .336.013.502.037A11.089 11.089 0 008.829 4h1.755c.148.338.26.696.33 1.068l.176-.028a2.74 2.74 0 01.5 0c.113 0 .225.006.336.018A6.001 6.001 0 000 6a6 6 0 005.672 5.991 4 4 0 01-.202-.441 1.842 1.842 0 01-.24-.26 1.82 1.82 0 01-.26-.55 2 2 0 01-.185-.92l-.012-.025A6.036 6.036 0 014.448 9zM3.171 8H1.416A4.983 4.983 0 011 6c0-.711.148-1.388.416-2h1.755C3.06 4.626 3 5.299 3 6c0 .701.06 1.374.17 2zM2 9H3.4c.18.618.412 1.167.685 1.62A5.015 5.015 0 012 9zm2.448-6h3.104a6.036 6.036 0 00-.325-.795C6.737 1.225 6.246 1 6 1c-.246 0-.737.225-1.227 1.205-.119.238-.228.504-.325.795zm4.15 0H10a5.016 5.016 0 00-2.086-1.62c.273.453.506 1.002.685 1.62zM4.087 1.38A6.834 6.834 0 003.401 3H2a5.015 5.015 0 012.086-1.62zM13.476 16s.118-.385-.172-1.046c-.228-.533-1.172-.915-2.015-1.257a22.113 22.113 0 01-.584-.243c-.808-.356-.816-.588-.825-.872-.002-.041-.003-.084-.007-.128v-.139c.314-.284.573-.669.745-1.115 0 0 .008-.023.008-.03.04-.1.071-.2.095-.3.212-.04.33-.27.377-.485.054-.093.149-.3.125-.547-.024-.307-.15-.453-.29-.515v-.054c0-.392-.04-.961-.11-1.33a2.16 2.16 0 00-.071-.308 2.283 2.283 0 00-.8-1.17C9.558 6.162 9.001 6 8.506 6c-.495 0-1.052.162-1.445.462A2.294 2.294 0 006.19 7.93c-.07.369-.11.946-.11 1.338v.046c-.14.062-.274.208-.306.523a1 1 0 00.126.547c.047.215.173.453.393.492.02.083.05.172.078.253l.016.047c0 .008.008.015.008.015v.008c.172.454.44.846.761 1.115a.804.804 0 01-.004.072c-.002.02-.004.04-.004.06l-.007.105c-.016.287-.028.523-.848.894-.176.078-.37.156-.568.237-.847.345-1.802.735-2.031 1.27C3.41 15.616 3.52 16 3.52 16h9.955zm2.503-1.25h-1.413a4.05 4.05 0 00-.116-.294c-.192-.445-.52-.753-.787-.955-.278-.21-.59-.38-.873-.517a21.373 21.373 0 00-1.122-.483l-.02-.008-.235-.097c.144-.23.266-.476.366-.731.089-.087.162-.177.22-.26.132-.192.217-.391.271-.568.117-.251.24-.64.199-1.105a2.025 2.025 0 00-.299-.925 8.626 8.626 0 00-.116-1.083 3.426 3.426 0 00-.104-.45 3.476 3.476 0 00-.661-1.246A2.18 2.18 0 0111.63 6c.432 0 .92.141 1.264.404.33.256.584.612.7 1.023.028.087.049.182.062.27.062.322.097.82.097 1.163v.048c.123.053.233.181.254.45a.82.82 0 01-.11.478c-.041.189-.144.391-.33.425a1.92 1.92 0 01-.082.262c0 .007-.007.027-.007.027-.151.39-.378.727-.653.976v.121c.004.038.005.075.006.111v.002c.008.247.015.451.722.762.158.07.332.14.51.213.739.299 1.565.634 1.764 1.1.254.579.151.915.151.915z'];
var svgPaths20 = ['M8 0C3.58 0 0 3.58 0 8a8 8 0 005.856 7.71c.064-.057.129-.109.19-.156.278-.209.595-.383.896-.53.358-.174.81-.358 1.193-.515.206-.084.393-.16.534-.223a3.93 3.93 0 00.203-.095 4.1 4.1 0 01-.305-.45C8.382 13.911 8.19 14 8 14c-.67 0-1.36-1.1-1.73-3h1.252c.047-.296.153-.571.323-.797l.01-.203H6.12C6.05 9.39 6 8.73 6 8s.05-1.39.12-2h3.76l.037.344c.315-.145.65-.242.979-.295L10.89 6h2.76c.027.077.052.155.076.233l.118-.04A3.62 3.62 0 0114.998 6c.247 0 .51.028.772.086A8 8 0 008 0zm5.17 5h-2.44c-.21-1.11-.51-2.03-.91-2.69 1.43.46 2.61 1.43 3.35 2.69zM8 2c.67 0 1.36 1.1 1.73 3H6.27C6.64 3.1 7.33 2 8 2zm-1.82.31c-.4.66-.71 1.58-.91 2.69H2.83a6.025 6.025 0 013.35-2.69zM2 8c0-.7.13-1.37.35-2h2.76C5.04 6.62 5 7.28 5 8s.04 1.38.11 2H2.35C2.13 9.37 2 8.7 2 8zm.83 3h2.44c.21 1.11.51 2.03.91 2.69A6.025 6.025 0 012.83 11z', 'M13.917 15.209c.21.094.444.19.685.288.912.374 1.927.789 2.188 1.355.31.722.186 1.148.186 1.148H6.026s-.13-.426.186-1.148c.256-.584 1.305-1.011 2.234-1.39.22-.088.432-.175.626-.26.909-.4.923-.662.94-.978.002-.037.004-.076.008-.115l.003-.072c.002-.025.004-.049.004-.073a3.067 3.067 0 01-.839-1.237l-.007-.007a.024.024 0 00-.003-.01 1.757 1.757 0 01-.113-.347c-.234-.042-.372-.296-.427-.537a1.045 1.045 0 01-.137-.598c.034-.35.179-.509.337-.57v-.056c0-.44.034-1.065.117-1.478a2.508 2.508 0 01.962-1.623c.426-.33 1.038-.501 1.58-.501.544 0 1.155.172 1.588.502a2.496 2.496 0 01.963 1.622c.075.413.117 1.045.117 1.478v.062c.15.062.288.22.323.564.02.268-.083.502-.138.598-.048.234-.185.488-.42.537a2.635 2.635 0 01-.116.364 3.094 3.094 0 01-.818 1.224c0 .055 0 .11.007.158.004.048.006.095.007.14.011.311.02.57.907.96z', 'M14.976 14.57c-.24-.098-.455-.186-.65-.274l-.007-.003a3.801 3.801 0 01-.194-.091c.224-.288.41-.609.554-.946l.001-.002.013-.033c.018-.043.036-.087.052-.13l.011-.027.016-.04c.105-.092.19-.19.256-.284.129-.184.213-.38.265-.563.105-.226.225-.592.192-1.026l-.001-.011-.002-.011a1.855 1.855 0 00-.325-.91 9.924 9.924 0 00-.12-1.246 3.088 3.088 0 00-.106-.474l-.001-.007a3.543 3.543 0 00-.763-1.353c.27-.092.56-.139.83-.139.495 0 1.05.156 1.444.456a2.269 2.269 0 01.875 1.475c.069.375.106.95.106 1.344v.056c.138.056.263.2.294.513.019.244-.075.456-.125.543-.044.213-.169.444-.381.488-.025.1-.056.206-.094.3a2.815 2.815 0 01-.756 1.144c0 .05 0 .1.006.144.004.043.006.086.007.127.01.283.018.518.824.873.192.086.404.172.623.262.83.34 1.752.717 1.99 1.231.28.657.168 1.044.168 1.044h-2.081a3.864 3.864 0 00-.188-.542l-.005-.013-.006-.012c-.183-.397-.491-.681-.76-.88a5.614 5.614 0 00-.896-.522 17.36 17.36 0 00-.916-.4l-.15-.061z'];
export var ThirdPartyIcon = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function ThirdPartyIcon(props, ref) {
  return /*#__PURE__*/React.createElement(Icon, _extends({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "third-party"
  }, props));
}));
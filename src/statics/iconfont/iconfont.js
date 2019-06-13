import { createGlobalStyle } from 'styled-components';
export const FontGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1560319821765'); /* IE9 */
    src: url('./iconfont.eot?t=1560319821765#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAcAAAsAAAAADSAAAAaxAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEYgqLEIkkATYCJAM0CxwABCAFhG0HgRUbTQsRFaw9IPt54BhrR+i4lr/3yI1QWFEjnfucD+Gm/+4uQJoQSkWdiTmBmUjYHGZqyNSr3ySdOwFwuGldw5hTlSxZ1/7y04f0QkIGcDkmIhwqyp9drakNsPsIhevexRui+xBiicYDCl2hANhVxnUqbGtkK5yoML4q0XnppBe8x4EAEBCNTJD6DZubwYMDpyNoGDygXw/wNiu4EIyAN2h9LuU0ZDE04Ok8ehvAIvX7yTPkEx6g0DBwT2rdt0Fv1FbDy5czxaugM1Og5OcGcL0KYAAyAXAAuejrPQ+mZzPBILw7OSwGEA6j61dWw9UENU3NVnPVArWi2k7toj4r58uXe73wnwq3HoJw/p88QAQHPSgYNNCBhxY+IBAAogX0+tOczTabGi7iIAJqAg4coKbJw1E2zKBAuTCDARXADA1QRZihA2oHM3igLjBDC/QMOPgA5TwOBChf3gUBACDJl4QDiAbIJoC2AEd0VvV0xstOmA6cTCeRVFSkGCNwuwTo9YzjGON49mmDxKxEXZhWrzf4TNIfL8w8WFxRv/08OMWZJO0pcpRkSLvcRGNzddbbA3eftp9NXynoNdKJB1F0xR7HvhC26VElCb8+61VYahbsYvtJgt68PDDYHsx+2EpCBPveYLZqn+jr2AOq7Bb62s8rTofb5hJE3GnYoZKE4mJLYaG5qEh2lNQL7FBrqB0rKbG2FRZOKvwvcad6foVcUtSvV+euPeSeDXta5e49Bgyy9h9kscpDG0ofI8lmk69g0ZuFQWKHjiujhfWh7XucEx2AQASPYL9LbFarTbBXl4/vhrJHdFwiZFKB0mLC604dCLWoy3STdfsqToa0IXvY9qVMcgTtPBhOwsrJWpf9PBCxDcr+xFXi8t15vcHXsc+2t/upRzHChgeTBLL27GlAsO8/kCSWJO2sE4m469DBQX16t+3Xd1J5y4uLx7fx3G7mnafPrw8zW3eccm8KNy//7erYo1RJqARPs2RFEU/x4K/VMTtiVv8l7akX2Vyw7ZHsd41+Hum3P6DIVBSw3y9yB+7/bqhkMMWa5NH8fh9Qulb7vmtbhOvEpzdzQ3ZHa921YDJeWxYut5njgTTHlKihrHq6gYhH9TD0Mhgltd3PcC8rPM+UV0H0R2yK0DnhG29VMc4UFwH3t31R/Xi24dL9pWwZO7npBvqR0Kktptf+nPhJOzFy+0S27QCdzpdsOziRTqAn+ekvO4CKI8qDDzeO6DeuUUTIYWHfpwaj7SPtXxqg9qerypJOP+tIa8y6SGf4jVg65FDHumY2KjguO/7tFO8GXa/689dbZo841ubQsBrTs/fbKkyuvgaevo0epNZ/0MfgLd+KB9ZsJdO6PQfULOG+1Rw1+krlHKKpkz0szTJA6iI2q131v67W0bfCgr6FJ71JioZppJDR68DIwVhJr12jK0lCEul2Q3F4fFrfGSePjs6fUrJsDk6x9+8Z05yCBO87GKe7V5MtkONlvxfGvsYrfpY4GchHibAjo4HuIOk+xtElSMsjH2Fa7eyxDtLjQKgcsUJ4LcfJxqZGup2paHFfn0s+fZGft+r9BxqQEPDhQ8DvjrEf3vvmR+Ub3r/PjYtHr8/jxo8b96IKdyZiA2o7ue/fOBfn/P7dyYH7nXOeJf5bfRsrLWNb2bbS0m2MaUslzVbXWXF1nfIIT8F3nex0ysPvaW9tnv4i5feU31Jup6DbZwDeG/mNVQIA1oOeeAsvxclqYP3pL+lHrSZTVL6XeRgOvpujLB8AWCMmsac0o8cBgP5Ov8DryQVW5497GBaOuhDQzbf6B148mLeVJZ9uQTavkm8NeFAgtuJvWsbVBABZ9VHBJnGvScSl1PRT5lkHCTWg2xXdgMAHAS8F/fFHOURQ7DRAwNsUV6DQIQoYeCSSOXomaCDCBFrwqAUCMtDoahEBGAkGwvkASMcsBgRGHAIKA9zAYMQdMkf/HTQIxgvQwkgYCLCQgFuKwN6IubwRCsYXlDMY2QQlOPiiNX5j1TtBVpXK+0eKJgF5kjkLXxiQ8jgjDlXBrEBR4+GTPQ2da6ClpkbJiWZu72mq/N6QyMavLngjFIwvQDnL4kY2Qa3OF9fXf2PVO0EhE77F/5Gi2TkgR4IsBvlLH2JNWJf2OFQFmNwKxH5qPOCT3Oj4bANo/Q+qUXICnSLd3pHSQiquPimf8NNcdYhPwo3ikSqabpiW7bg+z1+u43ucTNR9iWHf9ca5w2REI5YfIgqS2lamexFOi9QRtck3D3H56WcvdIy3d76tjdgFnPighNMTVisAAA==') format('woff2'),
    url('./iconfont.woff?t=1560319821765') format('woff'),
    url('./iconfont.ttf?t=1560319821765') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1560319821765#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
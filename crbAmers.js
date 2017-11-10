function textFlipPrice(sectionID, sectionKind, price1, price2) {

    $('#' + sectionID + ' .spread1').text(price1);
    $('#' + sectionID + ' .spread2').text(price2);

}

function textFlipCost(sectionID, sectionKind, cost1, cost2) {

    $('#' + sectionID + ' .spread1').text(cost1);
    $('#' + sectionID + ' .spread2').text(cost2);

}







function triggerDropDown(dropTitleID, titleOfUl) {
    $('#' + titleOfUl + ' li').show();

    $('#' + titleOfUl).on('mouseleave', function() {
        $('#' + titleOfUl + ' li').hide();

    });

    $('#' + titleOfUl + ' .field1').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
    });

    $('#' + titleOfUl + ' .field2').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
    });

    $('#' + titleOfUl + ' .field3').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
    });

    $('#' + titleOfUl + ' .field4').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
    });

    $('#' + titleOfUl + ' .field5').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
    });

    $('#' + titleOfUl + ' .field6').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
    });




    ;
}




var myID;

var controlPressed = false;
var priceCostToggleBoolean = false;
var priceCostToggleBoolean = false;
var pricerSideToggleBoolean = false;
var buySellBoolean = false;
var shortSellBoolean = false;

$(document).ready(function() {
        $('#colorKeyList').hide();

        $('#popUpBackground').hide();
        $('#popUpBackground2').hide();
        $('#popUp2').hide();
        $('#popUpUrgencyDropDown li').hide();
        $('#popUpFollowDropDown li').hide();
        $('#pricerToolBackground').hide();
        $('#pricerToolBackground').hide();
        $('#pricerDrawer').hide();

        $('#backgroundRestrictions').hide();
        $('#popUpRestrictionsDropDown li').hide();
        $('#popUpMarketDropDown li').hide();
        $('#popUpMissedDropDown li').hide();
        $('#IOIfieldPlace').hide();

        $('#additionalIOIs').hide();
        $('#additionalIOIs2').hide();



        $('#wrapperRestrictions').hide();
        $('#wrapperHistory').hide();
        $('#wrapperParameters').hide();





        $(window).keydown(function(event) {
            if (event.which == 17 || event.which == 91) {
                controlPressed = true;
                console.log(controlPressed);
            }
        }).keyup(function(event) {
            if (event.which == 17 || event.which == 91) {
                controlPressed = false;
                if (selectedItems.length > 0) {

                    $('#backgroundRestrictions').show();
                    selectedItems = [];
                }
                console.log(controlPressed);
            }
        })


        selectedItems = [];






        $('#priceCostToggleInput').on('click', function() {
            priceCostToggleBoolean = !priceCostToggleBoolean;
            if (priceCostToggleBoolean) {
                console.log('checked');
                textFlipPrice('buySell100', '.buySellSection', 445.22, 445.22);
                textFlipPrice('buySell200', '.buySellSection', 445.22, 445.39);
                textFlipPrice('buySell400', '.buySellSection', 445.22, 445.51);
                $('.spreadPriceTitle').text("Price");

            } else {
                console.log('not checked');
                textFlipCost('buySell100', '.buySellSection', .32, .36);
                textFlipCost('buySell200', '.buySellSection', .33, .36);
                textFlipCost('buySell400', '.buySellSection', .34, .36);
                $('.spreadPriceTitle').text("Spread");
            }
        })


        $('#TCA').click(function() {
            $('#wrapperRestrictions').hide();
            $('#wrapperHistory').hide();
            $('#wrapperParameters').hide();
            $('.navigation span').removeClass('selected');
            $(this).addClass('selected');

        })

        $('#Restrictions').click(function() {
            $('#wrapperRestrictions').show();
            $('#wrapperParameters').hide();
            $('#wrapperHistory').hide();
            $('.navigation span').removeClass('selected');
            $(this).addClass('selected');

        })


        $('#History').click(function() {
            $('#wrapperHistory').show();
            $('#wrapperParameters').hide();
            $('#wrapperRestrictions').hide();
            $('.navigation span').removeClass('selected');
            $(this).addClass('selected');

            var innerWrapperHistory = $('.innerWrapperHistory').height();
            var innerWrapperHistoryScroll = $('.innerWrapperHistory').prop('scrollHeight');

            console.log("innerWrapperHistory is " + innerWrapperHistory);
            console.log("innerWrapperHistoryScroll is " + innerWrapperHistoryScroll);
            if ($('.innerWrapperHistory').prop('scrollHeight') > $('.innerWrapperHistory').prop('clientHeight')) {

                $('.columnHeaders').css('padding-right', '10px');
                console.log("i am greater")
            }

        })

        $('#Parameters').click(function() {
            $('#wrapperParameters').show();
            $('#wrapperHistory').hide();
            $('#wrapperRestrictions').hide();
            $('.navigation span').removeClass('selected');
            $(this).addClass('selected');

        })











        function chooseSell() {
            console.log('now sell');

            $('.buySellSection').removeClass('textGreen');
            $('.buySellSection').addClass('redText');
            $('.side').removeClass('selectedSide');
            $('#sellChoose').addClass('selectedSide');
            $('.minusSymbol').show();
            $('.plusSymbol').hide();
            $('.arrow').show();
            $('#shortLocate .horizontalInfoField').text('');
            $('#shortLocate .horizontalInfoField').removeClass('redText');
            $('#locateIDSection').hide();
            $('.popUpSide').removeClass('textGreen');
            $('.popUpSide').addClass('redText');
            $('.popUpSide').text('S');
            $('.tightWideToggle1').text('(Widest)');
            $('.tightWideToggle2').text('(Tightest)');
            buySellBoolean = true;
            shortSellBoolean = false;


        }
        $('#sellChoose').on('click', function() {

            chooseSell();
            postQuantityNumbers();
            console.log(buySellBoolean);
        });

        $("#sellChoose").keypress(function(event) {
            if (event.which == 13) {

                chooseSell();
                postQuantityNumbers();

            }
        });




        function chooseShort() {
            console.log('now short');

            $('.buySellSection').removeClass('textGreen');
            $('.buySellSection').addClass('redText');
            $('.side').removeClass('selectedSide');
            $('#shortChoose').addClass('selectedSide');
            $('.minusSymbol').show();
            $('.plusSymbol').hide();
            $('.arrow').show();
            $('.popUpSide').removeClass('textGreen');
            $('.popUpSide').addClass('redText');
            $('.popUpSide').text('SS');
            $('.tightWideToggle1').text('(Widest)');
            $('.tightWideToggle2').text('(Tightest)');
            $('#locateIDSection').show();
            if (priceThis > 1000) {
                $('#shortLocate .horizontalInfoField').text('Hard to borrow');
                $('#shortLocate .horizontalInfoField').addClass('redText');

            } else if (priceThis <= 1000) {
                $('#shortLocate .horizontalInfoField').text('Easy to borrow');
                $('#shortLocate .horizontalInfoField').removeClass('redText');
            }

            buySellBoolean = true;
            shortSellBoolean = true;

        }

        $('#shortChoose').on('click', function() {

            chooseShort();
            postQuantityNumbers();
            console.log(buySellBoolean);
        });

        $("#shortChoose").keypress(function(event) {
            if (event.which == 13) {

                chooseShort();
                postQuantityNumbers();

            }
        });





        function chooseBuy() {

            $('.buySellSection').removeClass('redText');
            $('.buySellSection').addClass('textGreen');
            $('.side').removeClass('selectedSide');
            $("#buyChoose").addClass('selectedSide');
            $('.minusSymbol').hide();
            $('.plusSymbol').show();
            $('#shortLocate .horizontalInfoField').text('');
            $('#shortLocate .horizontalInfoField').removeClass('redText');
            $('#locateIDSection').hide();
            $('.popUpSide').addClass('textGreen');
            $('.popUpSide').removeClass('redText');
            $('.popUpSide').text('B');
            $('.tightWideToggle2').text('(Widest)');
            $('.tightWideToggle1').text('(Tightest)');
            $('.arrow').show();
            buySellBoolean = false;
            shortSellBoolean = false;

        }

        $("#buyChoose").keypress(function(event) {
            if (event.which == 13) {

                chooseBuy();
                postQuantityNumbers();
                console.log(buySellBoolean);

            }
        });


        $('#buyChoose').on('click', function() {
            console.log('now buy');

            console.log(buySellBoolean);
            chooseBuy();
            postQuantityNumbers();

        });






        // function changeRowBuy(someID) {
        //     $('.buySellSection.selectedBuy .band, .buySellSection.selectedSell .band').removeClass('bandWhite');
        //     $('.buySellSection').removeClass('selectedSell');
        //     $('.buySellSection').removeClass('selectedBuy');
        //     $('.quantitySection').removeClass('selectedBuy');
        //     $('.quantitySection').removeClass('selectedSell');
        //     $('.buySellSection').addClass('textGreen');
        //     $('#' + someID + ' .buySellSection').addClass('selectedBuy');
        //     $('#' + someID + ' .buySellSection .band').addClass('bandWhite');
        //     $('#' + someID + ' .quantitySection').addClass('selectedBuy');

        // }

        // function changeRowSell(someID) {
        //     $('.buySellSection.selectedBuy .band, .buySellSection.selectedSell .band').removeClass('bandWhite');
        //     $('.buySellSection').removeClass('selectedSell');
        //     $('.buySellSection').removeClass('selectedBuy');
        //     $('.quantitySection').removeClass('selectedBuy');
        //     $('.quantitySection').removeClass('selectedSell');
        //     $('.buySellSection').addClass('redText');
        //     $('#' + someID + ' .buySellSection').addClass('selectedSell');
        //     $('#' + someID + ' .buySellSection .band').addClass('bandWhite');
        //     $('#' + someID + ' .quantitySection').addClass('selectedSell');

        // }









        $('#acceptButton').on('click', function() {
            if ($('#acceptButton').hasClass('lowOpacity')) {
                return;
            }
            else {
                $('#popUpBackground').show();
                $('#popUp1').show();
            }
            
        });

        $('#notTraded').on('click', function() {
            $('#popUpBackground2').show();
            $('#popUp3').show();
        });
        $('#traderButton').on('click', function() {
            $('#popUpBackground').show();
            $('#popUp4').show();
        });






        ///////////////pop up 1////////////////

        $('#popUpClose').on('click', function() { $('#popUpBackground').hide(); });

        $('#executeButton').on('click', function() {
            $('#popUp1').hide();
            console.log('yo');
            $('#popUp2').show();

        });

        $('#executeButtonTrader').on('click', function() {
            $('#popUp1').hide();
            console.log('yo');
            $('#popUp4').show();

        });



        ///////////////pop up 2////////////////


        $('#popUpCloseMissed').on('click', function() { $('#popUpBackground2').hide(); });
        $('#popUpCloseTrader').on('click', function() {
            $('#popUp4').hide();
            $('#popUpBackground').hide();
        });

        $('#popUpCloseRestrictions').on('click', function() { $('#backgroundRestrictions').hide(); });









        $('#doneButton').on('click', function() {
            $('#popUpBackground').hide();
            $('#popUp1').hide();
            $('#popUp2').hide();
        });

        $('#doneButtonMissed').on('click', function() {
            $('#popUpBackground2').hide();

        });

        $('#doneButtonTrader').on('click', function() {
            $('#popUpBackground').hide();
            $('#popUp1').hide();
            $('#popUp2').hide();
            $('#popUp4').hide();

        });






        ////// StockList//////////




            var clientList = [
            { client: "alambicx", clientCompany: "Albemarle Global Investors"},
            { client: "balyasnyx", clientCompany: "Balyasny Asset Management" },
            { client: "carnmgmt", clientCompany: "Carnegie Asset Management"},
            { client: "chiltonny", clientCompany: "Chilton Investment"},
            { client: "deshaw", clientCompany: "D.E. Shaw-Deshany Inc"},
            { client: "grahamx", clientCompany: "Graham Company Holdings Investment LLC" },
            { client: "harvey", clientCompany: "Harvey Partners" },
            { client: "jonedsa", clientCompany: "Jones Trading Inst Sev LLC"},

            { client: "mauritius", clientCompany: "Maju Investments"},
            { client: "cgpyasnyx", clientCompany: "Cyrus Capital Partners"},
            { client: "rrrterusx", clientCompany: "Ratan Capital Management"},
            { client: "shlmnms", clientCompany: "Sherwood Investments" },
            { client: "deshdma", clientCompany: "Desjardins Global Asset" },
            { client: "slaahamx", clientCompany: "Sloane Robinson Investment" },
            { client: "fonedsa", clientCompany: "Fontana Capital Management" },
            { client: "nortsa", clientCompany: "Northern Trust Company" },
            { client: "alkdsa", clientCompany: "Allinace Bernstein" },
            { client: "allipwst", clientCompany: "Alson Capital Management" },
            { client: "alydarx", clientCompany: "Alyeska Investment Group" },
            { client: "amcedsa", clientCompany: "American Century Investment" },
            { client: "aqrpropx5", clientCompany: "AQR Capital Management" },
            { client: "arrowgrtx", clientCompany: "Arrowgrass Capital" },


            { client: "brockst", clientCompany: "Brock Street Capital" },
            { client: "btigdsa", clientCompany: "BTG Pactual" },

            { client: "canteshx", clientCompany: "Capital Guardian Research Management" },
            { client: "cantustp", clientCompany: "Cantillon Capital Management" },

            { client: "deepbltsx", clientCompany: "Deerfield Management" },


            { client: "everpnt", clientCompany: "Everpoint Capital Management" },
            { client: "flowbvx6", clientCompany: "Flossbach Capital Management" },
            { client: "govlanex", clientCompany: "Government Capital Management" },

            { client: "janexno", clientCompany: "Janus Capital" },

            { client: "rigtwloy", clientCompany: "Riversource Investments" },

            { client: "dalkdsa", clientCompany: "Darsana Capital" },
            { client: "ollipwst", clientCompany: "Old Mutual Asset Mgt" },
            { client: "yelydarx", clientCompany: "Yellow Flag Capital LLC" },
            { client: "scrmcedsa", clientCompany: "Scopus Asset Management" },
            { client: "ghrpropx5", clientCompany: "Ghosttree" },
            { client: "royowgrt", clientCompany: "Royce & Associates" },


            { client: "ohiokst", clientCompany: "Ohio State Teach Ret Sys" },
            { client: "quebdsa", clientCompany: "Hydro Quebec" },

            { client: "gabeleshx", clientCompany: "Gabelli & Company, Inc" },
            { client: "nantustp", clientCompany: "National Life Investment" },

            { client: "deepbltsx", clientCompany: "Deka Investment" },


            { client: "ppverpnt", clientCompany: "Pointesite Capital" },
            { client: "blowbvx6", clientCompany: "Capital Management" },
            { client: "shovlanex", clientCompany: "Capital Management" },

            { client: "danexno", clientCompany: "Capital Management" },

            { client: "vIGTWLO", clientCompany: "Capital Management" },
            { client: "maltauk", clientCompany: "Capital Management" },
            { client: "goopurd", clientCompany: "Capital Management" },
            { client: "favaurt", clientCompany: "Capital Management" },

            { client: "raaaurt", clientCompany: "Capital Management" },

            { client: "taaattt", clientCompany: "Capital Management" },
            { client: "uaaart", clientCompany: "Capital Management" }

        ];



        var stockListIOI = [
            { ticker: "amzn", company: "Amazon.Com Inc", classification: "CRB ELIGIBLE" },
            { ticker: "orcl", company: "Oracle Corp", classification: "CLAIMED BY TRADER" },
            { ticker: "chlkf", company: "China Mobile Hong Ko", classification: "CRB ELIGIBLE" },
            { ticker: "aapl", company: "Apple, Inc.", classification: "CRB ELIGIBLE" },
            { ticker: "abev", company: "Ambev S.A.", classification: "CRB ELIGIBLE" },
            { ticker: "aw-un.to", company: "A&W Revenue Royalties In", classification: "CLAIMED BY TRADER" },
            { ticker: "amswa", company: "Amer Software Inc", classification: "CRB ELIGIBLE" },
            { ticker: "dcm", company: "Ntt Docomo Inc", classification: "CRB ELIGIBLE" },
            { ticker: "dac.vn", company: "DACHA CAPITAL INC.", classification: "CLAIMED BY TRADER" },
            { ticker: "kbl-un.to", company: "K-BRO LINEN INCOME FUND", classification: "CRB ELIGIBLE" },


            { ticker: "sbn-pr-a.to", company: "S Split Corp. Pref A", classification: "CRB ELIGIBLE" },
            { ticker: "fcx", company: "Freeport-Mcmoran Inc", classification: "RESTRICTED BY CRB" },
            { ticker: "000061.SZ", company: "Shenzhen Agricultural Products Co Ltd", classification: "CRB ELIGIBLE" },
            { ticker: "cuz", company: "Cousins Properties Inc", classification: "CRB ELIGIBLE" },
            { ticker: "dva", company: "Davita Healthcare Partners Inc", classification: "CRB ELIGIBLE" },
            { ticker: "000816.SZ", company: "Jiangsu Nonghua Intelligent Agriculture Technology Co Ltd", classification: "CLAIMED BY TRADER" },
            { ticker: "fcau", company: "Fiat Chrysler Automobiles N.V.", classification: "RESTRICTED BY CRB" },
            { ticker: "twtr", company: "Twitter Inc", classification: "CRB ELIGIBLE" },
            { ticker: "daiey", company: "DAI EI INC ADR", classification: "CRB ELIGIBLE" },
            { ticker: "ggb", company: "Gerdau S.A.", classification: "CRB ELIGIBLE" },


            { ticker: "lvlt", company: "Level 3 Communications", classification: "CRB ELIGIBLE" },
            { ticker: "rad", company: "Rite Aid Corp", classification: "CRB ELIGIBLE" },
            { ticker: "rig", company: "Transocean Inc", classification: "CLAIMED BY TRADER" },
            { ticker: "twlo", company: "Twilio Symbol", classification: "CRB ELIGIBLE" },
            { ticker: "eric.o", company: "Telefonaktiebolaget LM Ericsson", classification: "CLAIMED BY TRADER" },
            { ticker: "xom", company: "Exxon Mobil Corp", classification: "CRB ELIGIBLE" },
            { ticker: "zbh", company: "Zimmer Biomet Holdings", classification: "CRB ELIGIBLE" },
            { ticker: "auy", company: "Yamana Gold", classification: "CRB ELIGIBLE" },
            { ticker: "baba", company: "Alibaba Group Holding Ltd", classification: "CRB ELIGIBLE" },
            { ticker: "brdax", company: "B. Riley Diversified Equity Fund", classification: "RESTRICTED BY CRB" },


            { ticker: "ptx", company: "Pernix Theraptcs", classification: "CRB ELIGIBLE" },
            { ticker: "zfgn", company: "Zafgen Inc", classification: "CRB ELIGIBLE" },
            { ticker: "pcrx", company: "Pacira Pharm Inc", classification: "CLAIMED BY TRADER" },
            { ticker: "qtnt", company: "Quotient Limited Ord", classification: "CRB ELIGIBLE" },
            { ticker: "cemp", company: "Cempra Inc", classification: "CRB ELIGIBLE" },
            { ticker: "avgr", company: "Avinger Inc", classification: "CLAIMED BY TRADER" },
            { ticker: "sanww", company: "S&W Seed Company", classification: "RESTRICTED BY CRB" },
            { ticker: "apen", company: "Apollo Endosurgery Inc", classification: "CRB ELIGIBLE" },
            { ticker: "orex", company: "Orexigen Therapeutic", classification: "CLAIMED BY TRADER" },
            { ticker: "icui", company: "ICU Medical Inc", classification: "CRB ELIGIBLE" },

            { ticker: "ftr", company: "Frontier Commun Cp", classification: "CRB ELIGIBLE" },
            { ticker: "fb", company: "Facebook, Inc", classification: "CLAIMED BY TRADER" },
            { ticker: "siri", company: "Sirius XM Holdings I", classification: "CRB ELIGIBLE" },
            { ticker: "qqq", company: "Nasdaq QQQ ETF", classification: "CRB ELIGIBLE" },
            { ticker: "msft", company: "Microsoft Corp", classification: "CRB ELIGIBLE" },
            { ticker: "nvda", company: "Nvidia Corporation", classification: "CLAIMED BY TRADER" },
            { ticker: "mu", company: "Micron Technology", classification: "CRB ELIGIBLE" },
            { ticker: "csco", company: "Cisco Systems Inc", classification: "CRB ELIGIBLE" },
            { ticker: "intc", company: "Intel Corp", classification: "CLAIMED BY TRADER" },
            { ticker: "xiv", company: "VS -1X VIX Short Term", classification: "CRB ELIGIBLE" },
            { ticker: "vvpr", company: "Vivopower International Plc Ordi", classification: "RESTRICTED BY CRB" },
            { ticker: "vod ln", company: "Vodafone, PLC", classification: "CRB ELIGIBLE" },
            { ticker: "vod", company: "Vodafone Grp Plc Ads", classification: "CRB ELIGIBLE" },
            { ticker: "vrtbd", company: "Vestin Realty Mortgage Ii Inc.", classification: "CRB ELIGIBLE" }



        ];

        
        var OnestateIOI = false;
        var FourstateIOI = false;
        var fixTicketBool = false;

        $('.flipSideButton4#oneIOI').on('click', function() {

            if ((!OnestateIOI) && (!FourstateIOI)) {
                $('#additionalIOIs').show();

                $(this).addClass('selectedSide');
                OnestateIOI = true;


                console.log("One IOI is " + OnestateIOI);
            } else if (OnestateIOI && (!FourstateIOI)) {
                $('#additionalIOIs').hide();
                OnestateIOI = false;

                $(this).removeClass('selectedSide');

                $('#ticker').removeClass('IOIcolor');
                $('#claimText').removeClass('IOIcolor');

                console.log("One IOI is " + OnestateIOI);

            } else if ((!OnestateIOI) && FourstateIOI) {
                $('#additionalIOIs').show();
                $('#additionalIOIs2').hide();
                OnestateIOI = true;
                FourstateIOI = false;
                $(this).addClass('selectedSide');
                $('.flipSideButton4#fourIOIs').removeClass('selectedSide');
                console.log("One IOI is " + OnestateIOI);
            }

        });

        $('.flipSideButton4#fourIOIs').on('click', function() {

            if ((!OnestateIOI) && (!FourstateIOI)) {
                $('#additionalIOIs2').show();

                $(this).addClass('selectedSide');
                FourstateIOI = true;

            } else if (FourstateIOI && (!OnestateIOI)) {
                $('#additionalIOIs2').hide();
                FourstateIOI = false;

                $(this).removeClass('selectedSide');

                $('#ticker').removeClass('IOIcolor');
                $('#claimText').removeClass('IOIcolor');


            } else if ((!FourstateIOI) && OnestateIOI) {
                $('#additionalIOIs2').show();
                $('#additionalIOIs').hide();
                FourstateIOI = true;
                OnestateIOI = false;
                $(this).addClass('selectedSide');
                $('.flipSideButton4#oneIOI').removeClass('selectedSide');
            }
  
        });



        $('.flipSideButton5#fixTicket').on('click', function() {
            fixTicketBool = !fixTicketBool;
            $(this).toggleClass('selectedSide');
            console.log(fixTicketBool);

                if (fixTicketBool) {
                    $('#ticker, #clientForTicker, #quantityInput2, #myQuantity').prop('disabled', true);
                    $('#ticker, #clientForTicker, #quantityInput2, #myQuantity, .side').css('cursor', 'auto');
                    $('#ticker, #clientForTicker, #quantityInput2, #myQuantity, .side').addClass('amandaCursor');
                    $('#ticker').val('AMZN');
                    $('#quantityInput2').val('120,000');
                    $('#myQuantity').val('120000');
                    $('#row100 .quantitySection').text('60,000');

                    $('#row200 .quantitySection').text('120,000');
                    $('#row400 .quantitySection').text('240,000');
                    $('#tickerTitle').text('Amazon Company');
                    $('#claimText').text('CRB Eligible');

                    $('#ticker').addClass('liColorPlain');
                    $('#claimText').addClass('liColorPlain');
                    $('#tickerTitle').addClass('liColorPlain');
                    $('#clientForTicker').val('DESHAW');

                    $('#clientNamewrapper #clientText').text('D.E. Shaw-Deshany Inc');
                    $('#clientNamewrapper .horizontalLabel').text('Client');

                    $('.popUpClient').text('DESHAW');
                    $('.popUpTicker').text('AMZN');
                    $('.NBBO .NBBOsell').text('445.22');
                    $('.NBBO .NBBObuy').text('445.39');
                    $('.quantity').text('114,357');
                    $('#nbboA').text('7,777,000');
                    $('#nbboB').text('8,000,000');
                    $('#advText').text('49,661,870');
                    $('#ervText').text('24,830,000');
                    $('#crbMinQtyText').text('100,000');
                    $('#minMaxDivider').text('/');
                    $('#crbMaxQtyText').text('600,000');
                    $('#buySell100 .spread1').text('0.32');
                    $('#buySell100 .spread2').text('0.36');
                    $('#buySell200 .spread1').text('0.33');
                    $('#buySell200 .spread2').text('0.36');
                    $('#buySell400 .spread1').text('0.34');
                    $('#buySell400 .spread2').text('0.36');
                    $('#buySell100 .bip1').text('80');
                    $('#buySell100 .bip2').text('105');
                    $('#buySell200 .bip1').text('110');
                    $('#buySell200 .bip2').text('85');
                    $('#buySell400 .bip1').text('120');
                    $('#buySell400 .bip2').text('125');
                    $('.side').prop('disabled', true);
                    
                
                    $('.bottomButtonRow').show();
                    $('#notTraded').show();
                    $('#traderButton').show();
                    $('#acceptButton').removeClass('lowOpacity');
                    $('#acceptButton').show();
                    chooseBuy();
                    $('.bottomButtonRow, .expire').show();

                    $('.amersTopInputs ~ i').hide();
                }
                else if (!fixTicketBool) {
                    $('#ticker, #clientForTicker, #quantityInput2, #myQuantity').prop('disabled', false);
                    $('#ticker, #clientForTicker, #quantityInput2, #myQuantity, .side').removeClass('amandaCursor');
                    $('#ticker').val('');
                    $('#tickerTitle').text('');
                    $('#quantityInput2').val('');
                    $('#claimText').text('');
                    $('#clientNamewrapper .horizontalLabel').text(" ");
                    $('#clientText').text(" ");
                    $('#row100 .quantitySection').text('');
                    $('#clientForTicker').val('');

                    $('#row200 .quantitySection').text('');
                    $('#row400 .quantitySection').text('');
                    $('#ticker, #claimText, #tickerTitle').removeClass('liColorPlain');
                    
                    $('.NBBO .NBBOsell').text(' ');
                    $('.NBBO .NBBObuy').text('');
                    $('.quantity').text('');
                    $('#nbboA').text('');
                    $('#nbboB').text('');
                    $('#advText').text('');
                    $('#ervText').text('');
                    $('#crbMaxQtyText').text('');
                    $('#minMaxDivider').text('');
                    $('.bottomButtonRow').hide();
                    $('#notTraded').hide();
                    $('#traderButton').hide();
                    $('#acceptButton').hide();
                    $('#acceptButton').addClass('lowOpacity');
                    $('#buySell100 .spread1').text('');
                    $('#buySell100 .spread2').text('');
                    $('#buySell200 .spread1').text('');
                    $('#buySell200 .spread2').text('');
                    $('#buySell400 .spread1').text('');
                    $('#buySell400 .spread2').text('');
                    $('#buySell100 .bip1').text('');
                    $('#buySell100 .bip2').text('');
                    $('#buySell200 .bip1').text('');
                    $('#buySell200 .bip2').text('');
                    $('#buySell400 .bip1').text('');
                    $('#buySell400 .bip2').text('');
                    $('.buySellSection').removeClass('textGreen');
                    
                    $('.side').removeClass('selectedSide');
                    $('.side').prop('disabled', false);
                    $('.side').css('cursor', 'pointer');
                    
                    $('.plusSymbol').hide();
                    $('.bottomButtonRow, .expire').hide();
                    $('#locateIDSection').hide();
                    $('.popUpSide').removeClass('textGreen');
                    $('#ticker').focus();

                }

        });

        // $('.flipSideButton5#restrictedTrader').on('click', function() {

        //     if ((!restrictCrb) && (!restrictTrader)) {
        //         $('#ticker').addClass('restrictTrader');
        //         $('#claimText').addClass('restrictTrader');
        //         $('#claimText').text('restricted by trader');

        //         $(this).addClass('selectedSide');
        //         restrictTrader = true;

        //     } else if (restrictTrader && (!restrictCrb)) {
        //         $('#ticker').removeClass('restrictTrader');
        //         $('#claimText').removeClass('restrictTrader');
        //         $('#claimText').text('crb eligible');
        //         restrictTrader = false;

        //         $(this).removeClass('selectedSide');
        //     } else if ((!restrictTrader) && restrictCrb) {
        //         $('#ticker').addClass('restrictTrader');
        //         $('#claimText').addClass('restrictTrader');
        //         $('#ticker').removeClass('restrictCRB');
        //         $('#claimText').removeClass('restrictCRB');
        //         $('#claimText').text('restricted by trader');
        //         restrictCrb = false;
        //         restrictTrader = true;
        //         $(this).addClass('selectedSide');
        //         $('.flipSideButton5#restrictedCRB').removeClass('selectedSide');
        //     }

        // });






        function makeTickerTile(name, classification) {



            function returnRestrictionClass(classification) {
                if (classification == "CLAIMED BY TRADER") {
                    myRestrictionClass = "off";
                } else if (classification == "RESTRICTED BY CRB") {
                    myRestrictionClass = "wayOff";
                } else if (classification == "CRB ELIGIBLE") {
                    myRestrictionClass = "regular";
                }

                return myRestrictionClass;


            }
            var newTicker = $('<div><button class="tile ' + returnRestrictionClass(classification) + '">' + name + '</button></div>');

            $('#tickerZone').append(newTicker);


        };



        function iterateDisplay(arr) {

            for (i = 0; i < arr.length; i++) {
                makeTickerTile(arr[i].ticker, arr[i].classification);

            }
        };

        iterateDisplay(stockListIOI);
        console.log(stockListIOI.length);

        function hiddenTicker(arr) {
            var myArray = arr.length;
            var hiddenTicker = $('<div><button class="tile hidden"></button></div>');
            var hiddenTicker2 = $('<div><button class="tile hidden"></button></div>');
            var hiddenTicker3 = $('<div><button class="tile hidden"></button></div>');

            if (myArray % 4 == 1) {
                $('#tickerZone').append(hiddenTicker);
            }
            else if (myArray % 4 == 2) {
                $('#tickerZone').append(hiddenTicker);
                $('#tickerZone').append(hiddenTicker2);
            }
            else if (myArray % 4 == 3) {
                $('#tickerZone').append(hiddenTicker);
                $('#tickerZone').append(hiddenTicker2);
                $('#tickerZone').append(hiddenTicker3);
            }
        }


        hiddenTicker(stockListIOI);
        // var stockLen = stockListIOI.length;
        // console.log (stockLen % 4);



        $('#searchTicker').on('change', function() {
            var inputTick = $(this).val();

            inputTick.toUpperCase();
            console.log(inputTick);

            function findATicker(arr, myInput) {

                for (i = 0; i < arr.length; i++) {
                    var myString = arr[i].ticker;
                    if (myString.charAt(0) == myInput || myString.charAt(0) == myInput.toLowerCase()) {
                        console.log(arr[i].ticker);
                    }
                }
            };

            findATicker(stockListIOI, inputTick);

        })


        console.log(stockListIOI[0].ticker);

        var tickerCompany;

        var tickerClick = false;

        $('#pricerToolTicker, #ticker').on('keyup', function(event) {

            var inputTick = $(this).val();
            inputTick.toUpperCase();
            console.log(inputTick);


            var myString;

            function findATicker(arr, myInput) {

                var myRestrictionColor;


                for (var i = 0; i < arr.length; i++) {
                    function returnRestrictionColor(classification) {
                        if (classification == "CLAIMED BY TRADER") {
                            myRestrictionColor = "restrictTrader";

                        } else if (classification == "RESTRICTED BY CRB") {
                            myRestrictionColor = "restrictCRB";

                        } else if (classification == "CRB ELIGIBLE") {
                            myRestrictionColor = "liColorPlain";

                        }


                        return myRestrictionColor;


                    }



                    myString = arr[i].ticker;
                    company = arr[i].company;
                    classification = arr[i].classification;
                    if (myString.charAt(0) == myInput || myString.charAt(0) == myInput.toLowerCase()) {

                        $('#pricerToolTickerMenu ul').append('<li><button class=" ' + returnRestrictionColor(arr[i].classification) + ' " data-company="' + company + '" data-classification="' + classification + '" >' + arr[i].ticker + '</button></li>');
                        console.log(arr[i].ticker);
                        tickerClick = true;



                    }
                }
            };

            if (tickerClick == false) {
                findATicker(stockListIOI, inputTick);
            }


            $('#pricerToolTickerMenu ul li button, #pricerToolTickerMenu ul li button').on('click', function() {
                $('#ticker, #claimText, #tickerTitle').removeClass('restrictTrader');
                $('#ticker, #claimText, #tickerTitle').removeClass('restrictCRB');
                $('#ticker, #claimText, #tickerTitle').removeClass('liColorPlain');

                var inputText = $(this).text();
                console.log(this);
                newClass = $(this).attr("class");
                tickerCompany = $(this).data('company');
                classification = $(this).data('classification');
                console.log(tickerCompany);
                // if (classification == "CLAIMED BY TRADER") {
                //     restrictTrader = true;
                //     restrictCrb = false;

                // } else if (classification == "RESTRICTED BY CRB") {
                //     restrictTrader = false;
                //     restrictCrb = true;

                // } else if (classification == "CRB ELIGIBLE") {
                //     restrictTrader = false;
                //     restrictCrb = false;

                // }
                $('#ticker').val(inputText);
                $('#tickerTitle').text(tickerCompany);
                $('#claimText').text(classification);

                $('#ticker').addClass(newClass);
                $('#claimText').addClass(newClass);
                $('#tickerTitle').addClass(newClass);


                $('.NBBO .NBBOsell').text('445.22');
                $('.NBBO .NBBObuy').text('445.39');
                $('.quantity').text('114,357');
                $('#nbboA').text('7,777,000');
                $('#nbboB').text('8,000,000');
                $('#advText').text('49,661,870');
                $('#ervText').text('24,830,000');
                $('#crbMinQtyText').text('100,000');
                $('#minMaxDivider').text('/');
                $('#crbMaxQtyText').text('600,000');

                $('.popUpTicker').text(inputText);

                tickerClick = false;
                $('#clientForTicker').focus();
                
                $('.bottomButtonRow').show();
                $('#notTraded').show();
                $('#traderButton').show();
                $('#acceptButton').show();

                $('#pricerToolTickerMenu ul li, #pricerToolTickerMenu ul li').hide();
            })


        });

        var clientCompany;

        var clientClick = false;

        $('#clientForTicker').on('keyup', function(event) {

            var inputClient = $(this).val();
            inputClient.toUpperCase();
            console.log(inputClient);

            var myString;
            

            function findAClient(arr, myInput) {



                for (var i = 0; i < arr.length; i++) {

                    myString = arr[i].client;
                    clientCompany = arr[i].clientCompany;
                    myString.toUpperCase();
                    if (myString.charAt(0) == myInput || myString.charAt(0) == myInput.toLowerCase()) {

                        $('#clientMenu ul').append('<li data-company=" ' + arr[i].clientCompany + '" data-ticker=" ' + arr[i].client + '"><button class="liColorPlain">' + arr[i].client + '<div>' + arr[i].clientCompany + '</div></button></li>');
                        
                        clientClick = true;



                    }
                }
            }

            if (clientClick == false) {
                findAClient(clientList, inputClient);
            }

            $('#clientMenu ul li').on('click', function() {
                var inputText = $(this).data('ticker');

                var clientCompany = $(this).data('company');

                $('#clientForTicker').val(inputText);

                $('#clientNamewrapper #clientText').text(clientCompany);
                $('#clientNamewrapper .horizontalLabel').text('Client');

                $('.popUpClient').text(inputText);

                $('#quantityInput2').focus();

                clientClick = false;

                $('#clientMenu ul li').hide();
                $('#acceptButton').removeClass('lowOpacity');
            })


        });


        // var hasSide = false;

        $('.side').on('click', function(event) {


            $('#spreadWrapper').show();
            $('#buySell100 .spread1').text('0.32');
            $('#buySell100 .spread2').text('0.36');
            $('#buySell200 .spread1').text('0.33');
            $('#buySell200 .spread2').text('0.36');
            $('#buySell400 .spread1').text('0.34');
            $('#buySell400 .spread2').text('0.36');
            $('#buySell100 .bip1').text('80');
            $('#buySell100 .bip2').text('105');
            $('#buySell200 .bip1').text('110');
            $('#buySell200 .bip2').text('85');
            $('#buySell400 .bip1').text('120');
            $('#buySell400 .bip2').text('125');



            // $('.percentageSection .advPercentage').text('0');




            $('.bottomButtonRow, .expire').show();
            // $('.flipSideButton6#initialState').removeClass('selectedSide');
            // hasSide = true;
            // $('#quantityInput2').focus();


        });



        $('.tile').on('click', function(event) {
            if ($(this).hasClass('regular')) {
                $(this).addClass('off');
                $(this).removeClass('regular');
                if (controlPressed == true) {
                    selectedItems.push(event);
                } else {
                    $('#backgroundRestrictions').show();
                }



            } else if ($(this).hasClass('off')) {
                $(this).addClass('regular');
                $(this).removeClass('off');
            }



        })



        $('#colorKey').on('click', function() {
            $('#colorKeyList').show();
        })


        $('#popUpCloseColorKey').on('click', function() {
            $('#colorKeyList').hide();
        })
        $('#colorKeyList').on('mouseleave', function() {
            $('#colorKeyList').hide();
        })



        // function triggerDropDown(dropTitleID, titleOfUl)


        $('#turnOffDropTitle.dropDownTitle').click(function() {
            triggerDropDown('turnOffDropTitle', 'popUpRestrictionsDropDown');


        });

        $('#missedDropTitle.popUpdropDown').click(function() {
            triggerDropDown('missedDropTitle', 'popUpMissedDropDown');


        });

        $('#stockListSort.dropDownTitle').click(function() {
            triggerDropDown('stockListSort', 'popUpMarketDropDown');


        });


        $('#okButton').on('click', function() {
            $('#backgroundRestrictions').hide();
        })




        function getDate() {
            console.log('the time is ' + Date());
        }

        getDate();



        var twelveMinutes = 60 * 12;
        var fiveMinutes = 60 * 5;
        var tenSeconds = 10;


        function startTimer(duration, display) {

            var timer = duration;
            var minutes;
            var seconds;

            setInterval(function() {
                // parseInt the second parameter is base 10 format
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                //if minutes is less than 10 show a 0 in front
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds + ":00";


                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

        function startTimerSeconds(duration, display) {

            var timer = duration;

            var seconds;

            setInterval(function() {
                // parseInt the second parameter is base 10 format

                seconds = parseInt(timer % 60, 10);

                //if minutes is less than 10 show a 0 in front

                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = seconds + ":00";


                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }




        var display_2 = document.getElementById('currentTime');
        var display_3 = document.getElementById('currentTime2');
        startTimer(fiveMinutes, display_2);
        // startTimerSeconds(tenSeconds, display_3);

        //found this as compatible for IE

        $(".clearable").each(function() {

            var myTextClear = $(this).find("input"),
                clearThis = $(this).find(".clearable__clear"),
                clearThisMenu = $(this).find('.clearableMenu ul li');

            myTextClear.on("input", function() {
                clearThis.toggle(!!this.value);
            });

            clearThis.on("touchstart click", function(e) {
                e.preventDefault();
                myTextClear.val("").trigger("input");
                clearThisMenu.hide();

                myTextClear.focus();
            });



        });

        $(".clearableClient").each(function() {
           

                console.log("inside client " + fixTicketBool);
                var myTextClear = $(this).find("input"),
                clearThis = $(this).find(".clearable__clear"),
                clearThisMenu = $(this).find('.clearableMenu ul li');

                myTextClear.on("input", function() {
                    clearThis.toggle(!!this.value);
                });

                clearThis.on("touchstart click", function(e) {
                    e.preventDefault();
                    myTextClear.val("").trigger("input");
                    $('#clientNamewrapper .horizontalLabel').text(" ");
                    $('#clientText').text(" ");
                    clearThisMenu.hide();

                    myTextClear.focus();
                });


        });


        $(".clearableQuantity").each(function() {
            if (!fixTicketBool) {

                var myTextClear = $(this).find("input"),
                    clearThis = $(this).find(".clearable__clear");
                // clearThisMenu = $(this).find('.clearableMenu ul li');

                myTextClear.on("input", function() {
                    clearThis.toggle(!!this.value);
                });

                clearThis.on("touchstart click", function(e) {
                    e.preventDefault();
                    myTextClear.val("").trigger("input");

                    $('#row100 .quantitySection').text('');

                    $('#row200 .quantitySection').text('');
                    $('#row400 .quantitySection').text('');
                    $('#buySell100 .spread1').text('');
                    $('#buySell100 .spread2').text('');
                    $('#buySell200 .spread1').text('');
                    $('#buySell200 .spread2').text('');
                    $('#buySell400 .spread1').text('');
                    $('#buySell400 .spread2').text('');
                    $('#buySell100 .bip1').text('');
                    $('#buySell100 .bip2').text('');
                    $('#buySell200 .bip1').text('');
                    $('#buySell200 .bip2').text('');
                    $('#buySell400 .bip1').text('');
                    $('#buySell400 .bip2').text('');
                    $('.buySellSection').removeClass('redText');
                    $('.buySellSection').removeClass('textGreen');
                    $('.side').removeClass('selectedSide');
                    
                    $('.minusSymbol').hide();
                    $('.plusSymbol').hide();
                    $('#shortLocate .horizontalInfoField').text('');
                    $('#shortLocate .horizontalInfoField').removeClass('redText');
                    $('#locateIDSection').hide();
                    $('.popUpSide').removeClass('textGreen');
                    $('.popUpSide').removeClass('redText');
                    $('.popUpSide').text('');

                    myTextClear.focus();
                });

            }

        });

        // $('#clientText').text(clientCompany);


        $(".clearableTicker").each(function() {
            if (!fixTicketBool) {

                var myTextClear = $(this).find("input:text"),
                    clearThis = $(this).find(".clearable__clear");

                myTextClear.on("input", function() {
                    clearThis.toggle(!!this.value);

                });

                clearThis.on("touchstart click", function(e) {
                    e.preventDefault();
                    myTextClear.val("").trigger("input");
                    $('#tickerTitle').text(" ");
                    $('#claimText').text(" ");
                    $('#ticker, #claimText, #tickerTitle').removeClass('restrictTrader');
                    $('#ticker, #claimText, #tickerTitle').removeClass('restrictCRB');
                    $('#ticker, #claimText, #tickerTitle').removeClass('liColorPlain');
                    myTextClear.removeClass('restrictCRB');
                    myTextClear.removeClass('restrictTrader');
                    $('.NBBO .NBBOsell').text(' ');
                    $('.NBBO .NBBObuy').text('');
                    $('.quantity').text('');
                    $('#nbboA').text('');
                    $('#nbboB').text('');
                    $('#advText').text('');
                    $('#ervText').text('');
                    $('#crbMaxQtyText').text('');
                    $('#minMaxDivider').text('');
                    $('#pricerToolTickerMenu ul li').hide();

                    myTextClear.focus();
                });

                $(".clearableTicker ~ ul li").hide();

            }

        });





        var priceThis;
        var priceThisHalf;
        var priceThisDouble;
        var priceThisRegular;

        var quantityCollected = false;





function numbersNice(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }


        $('#quantityInput2').keydown(function(e) {


            if (e.which == 9) {
                e.preventDefault;
                console.log('tab, tab')
                var numTemp = $('#quantityInput2').val();
                priceThis = parseInt(numTemp.replace(/,/g, ''), 10);
                priceThisRegular = (priceThis * 1);
                
                priceThisRegular = numbersNice(priceThisRegular);
                  $('#quantityInput2').val(priceThisRegular);

                





            }

        })

      

        function postQuantityNumbers() {

            var numTemp = $('#quantityInput2').val();
            priceThis = parseInt(numTemp.replace(/,/g, ''), 10);

            $('#myQuantity').val(priceThis);

            console.log("My price is " + priceThis);

            priceThisRegular = (priceThis * 1);
            priceThisHalf = Math.ceil(priceThis / 2);
            priceThisDouble = (priceThis * 2);





            priceThisRegular = numbersNice(priceThisRegular);
            priceThisHalf = numbersNice(priceThisHalf);
            priceThisDouble = numbersNice(priceThisDouble);
            $('#quantityInput2').val(priceThisRegular);


            $('#row100 .quantitySection').text(priceThisHalf);

            $('#row200 .quantitySection').text(priceThisRegular);
            $('#row400 .quantitySection').text(priceThisDouble);
            $('.popUpQty').text(priceThisRegular);
        }




        var spreadB;






        var hugeNumbers = false;

        $('.flipSideButton3#hugeNumbers').on('click', function() {

            if (!hugeNumbers) {
                $('#buySell100 .spread1').text('77,445.22');
                $('#buySell100 .spread2').text('77,445.22');
                $('#buySell200 .spread1').text('77,777.22');
                $('#buySell200 .spread2').text('77,777.39');
                $('#buySell400 .spread1').text('77,445.22');
                $('#buySell400 .spread2').text('77,445.51');
                $('.NBBO .NBBOsell').text('7,777,777.77');
                $('.NBBO .NBBObuy').text('7,777,777.77');

                $(this).addClass('selectedSide');
                hugeNumbers = true;

            } else if (hugeNumbers) {

                $('#buySell100 .spread1').text('0.32');
                $('#buySell100 .spread2').text('0.36');
                $('#buySell200 .spread1').text('0.33');
                $('#buySell200 .spread2').text('0.36');
                $('#buySell400 .spread1').text('0.34');
                $('#buySell400 .spread2').text('0.36');

                $('.NBBO .NBBOsell').text('445.22');
                $('.NBBO .NBBObuy').text('445.39');
                hugeNumbers = false;

                $(this).removeClass('selectedSide');
            }

        });



        var d = new Date();

        console.log(d.toLocaleTimeString());


    })
    // end docready

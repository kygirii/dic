import React, { Component } from 'react';
import Search from './components/Search';
import SearchLang from './components/Language';
import WordTable from './components/WordTable';
import InsertWord from './components/InsertWord';
import InsertLang from './components/InsertLang';
import Relationship from './components/Relationship';
import Relationship1 from './components/EditRelationship';
import EditRelationship from './components/EditRelationship';
import './App.css';
import { Grid } from '@material-ui/core';
import NavBar from './components/basic/NavBar';
import SearchBar from './components/basic/SearchBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        borderRadius:50,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const wordDummyData = [
 //Word
    {
        id : "10000002",
        name : "기침감기",
        category : "질병",
        entity : "개체", 
        relations : [
            {  최상위어 : "질병" },
            {  상위어 : ["감기", "인플루엔자"] }, 
            {  하위어 : ["콧물", "기침", "몸살"] }, 
            {  동의어 : ["코비드", "독감", "신종코로나"] },
            {  연관어 : ["진단키트", "k방역", "질병관리본부","정은경", "사회적거리두기"] },
            {  유의어 : ["코비드", "우한폐렴", "신종코로나"] }
        ],
        languages : [
            {
                영어 : "cold",
            }, 
            {
                중국어 : "冷", 
            },
            {
                일본어 : "鼻炎"
            } 

        ]
    }, //Word
    {
        id : "10000003",
        name : "목감기",
        category : "질병",
        entity : "개체", 
        relations : [
            {  최상위어 : "질병" },
            {  상위어 : ["감기", "인플루엔자"] }, 
            {  하위어 : ["콧물", "기침", "몸살"] }, 
            {  동의어 : ["코비드", "독감", "신종코로나"] },
            {  연관어 : ["진단키트", "k방역", "질병관리본부","정은경", "사회적거리두기"] },
            {  유의어 : ["코비드", "우한폐렴", "신종코로나"] }
        ],
        languages : [
            {
                영어 : "cold",
            }, 
            {
                중국어 : "冷", 
            },
            {
                일본어 : "鼻炎"
            } 

        ]
    }, //Word
    {
        id : "10000004",
        name : "코감기",
        category : "질병",
        entity : "개체", 
        relations : [
            {  최상위어 : "질병" },
            {  상위어 : ["감기", "인플루엔자"] }, 
            {  하위어 : ["콧물", "기침", "몸살"] }, 
            {  동의어 : ["코비드", "독감", "신종코로나"] },
            {  연관어 : ["진단키트", "k방역", "질병관리본부","정은경", "사회적거리두기"] },
            {  유의어 : ["코비드", "우한폐렴", "신종코로나"] }
        ],
        languages : [
            {
                영어 : "cold",
            }, 
            {
                중국어 : "冷", 
            },
            {
                일본어 : "鼻炎"
            } 

        ]
    }, //Word
    {
        id : "10000005",
        name : "그냥감기",
        category : "질병",
        entity : "개체", 
        relations : [
            {  최상위어 : "질병" },
            {  상위어 : ["감기", "인플루엔자"] }, 
            {  하위어 : ["콧물", "기침", "몸살"] }, 
            {  동의어 : ["코비드", "독감", "신종코로나"] },
            {  연관어 : ["진단키트", "k방역", "질병관리본부","정은경", "사회적거리두기"] },
            {  유의어 : ["코비드", "우한폐렴", "신종코로나"] }
        ],
        languages : [
            {
                영어 : "cold",
            }, 
            {
                중국어 : "冷", 
            },
            {
                일본어 : "鼻炎"
            } 

        ]
    }, //Word
    
]

class App extends Component {
    id = "10000002";
    constructor(props){
        super(props);
        this.state= { 
            keyword : "",
            checked : false,
            searchLang : "한국어",
            filterdDummyDatas : [],
            wordInfo : [
                {
                    id : "",
                    name : "",
                    category : "",
                    entity : "", 
                    relations : [
                        {  최상위어 : '' },                  
                        {  상위어 : [] }, 
                        {  하위어 : [] }, 
                        {  동의어 : [] },
                        {  연관어 : [] },
                        {  유의어 : [] }
                    ],
                    languages : [
                        {
                            영어 : "",
                        }, 
                        {
                            중국어 : "", 
                        },
                        {
                            일본어 : ""
                        } 
            
                    ]
                }, //Word
            ],
            reset: [
                {
                    id : "",
                    name : "",
                    category : "",
                    entity : "", 
                    relations : [
                        {  최상위어 : ''},
                        {  상위어 : [] }, 
                        {  하위어 : [] }, 
                        {  동의어 : [] },
                        {  연관어 : [] },
                        {  유의어 : [] }
                    ],
                    languages : [
                        {
                            영어 : "",
                        }, 
                        {
                            중국어 : "", 
                        },
                        {
                            일본어 : ""
                        } 
            
                    ]
                }, //ResetWord
            ],
        }
    }
    
    

    handleInsertWordInfo = (e) => {
        const { wordInfo } = this.state;
        this.setState({
            wordInfo: ({...wordInfo, 
                [e.target.name] : e.target.value
            }),
        })
    }

    handleInsertRelationWord = (e) => {
        const { relations } = this.state;
        this.setState({
            wordInfo : {...this.state.wordInfo,
                relations : [
                    { [e.target.name] : e.target.value }
                ]
            }
        })
    }

    handleInsertLang = (e) => {
        this.setState({
            wordInfo : {...this.state.wordInfo,
                    language : [{ [e.target.name] : e.target.value }]
                        }
            })
        console.log('입력외국어 정보', this.state.wordInfo)
    }

    

    handleCheckList = (e) => {
        console.log('자식에게 받아온 checked', e.target.checked);
        console.log('체크 e.target.value : ', e.target.value);
        this.setState.checked = e.target.checked;
        if(e.target.checked === true) {

           console.log("handleCheckList function start")
            
           const filterdData = wordDummyData.filter((obj) => {
               if(obj.name.includes(e.target.value)){
                   console.log('체크에서 사용하는 필터 오브젝트 :', obj)
                   return obj;
               }
        })

        console.log('체크리스트에서 뽑은 filterdData name 값: ', filterdData[0].name)
        
        this.setState({ wordInfo :  filterdData});
        
        console.log('checkedData : ', this.state.wordInfo);
        console.log('wordInfo', this.state.wordInfo)
    } else {
        this.setState({ wordInfo :  this.state.reset});
        console.log('아무것도 선택하지 않음' , this.state.wordInfo);
      }
    }

    handleCreate = () => {
        const { wordInfo } = this.state.wordInfo;
        wordDummyData.push({ 
            id: this.id++,
            ...this.state.wordInfo, wordInfo
        })
        console.log('dummy : ', wordDummyData )

    }
    handleInsertKeyword = (e) => {
        this.setState({ keyword : e.target.value})
    }

    handleFilterdLanguage = (e) => {
        this.setState({ searchLang : e.target.value})
    }

    handleChangeKeyword = (e) => {
        this.setState({keyword : e.target.value})
    }

    handleFilterdDummyDatas = (e) => {
        console.log('핸들 필터 더미데이터 e.target', e.target)
        console.log('this.state.keyword', this.state.keyword)
        // if(this.state.keyword == "" || this.state.keyword == null) {
        //     this.setState({filterdDummyDatas : wordDummyData})
        // } else {
            const filterdData = wordDummyData.filter((obj) => {
                  if(obj.name.includes(this.state.keyword)){
                            console.log('검색 시 사용하는 필터의 object : ', obj)
                            return obj;
                        }else {
                            return obj;
                        }
                        
                    }) 
                    this.setState({ filterdDummyDatas : filterdData});
        //}
                console.log('this.filterdDummyDatas', this.state.filterdDummyDatas)

    }



  render() {
    const classes = this.props;
    const defaultDatas = wordDummyData;
    
    
    return (
      <div>
          <NavBar />

          {/* <Search 
            keyword={this.state.keyword}
            changeKeyword={this.handleChangeKeyword}
            searchBtnOnClick={this.handleFilterdDummyDatas}
            /> */}

          <hr />

              <Grid item xs={12} container>
                 <Grid item xs={4}>
                    <Card className={classes.root}>
                        <CardContent>
                            <SearchBar
                                keyword={this.state.keyword}
                                changeKeyword={this.handleChangeKeyword}
                                searchBtnOnClick={this.handleFilterdDummyDatas}/>
                             <SearchLang selectedLangValue={this.state.searchLang}
                                 filterdLanguage={this.handleFilterdLanguage}/>


                            <WordTable
                                  //data={this.state.keyword ? this.state.filterdDummyDatas : defaultDatas}
                                  data={this.state.filterdDummyDatas}
                                  check={this.handleCheckList}
                              />
                        </CardContent>
                    </Card>
                  </Grid>
                  <Grid container xs={8}>
                              <Grid item xs={6}>
                                  <Card className={classes.root}>
                                      <CardContent>
                                  {this.state.wordInfo.map((data, index) => {
                                      return  <InsertWord
                                          data={data}
                                          insertWordInfo={this.handleInsertWordInfo}
                                          key={index}
                                      />
                                  })}
                                      </CardContent>
                                  </Card>
                              </Grid>


                        <Grid item xs={6}>
                            <Card className={classes.root}>
                                <CardContent>
                                    {this.state.wordInfo.map((data, index) => {
                                        return  <InsertLang
                                            insertLang={this.handleInsertLang}
                                            datas={data}
                                            key={index}
                                        />
                                    })}
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card className={classes.root}>
                                <CardContent>
                          {this.state.wordInfo.map((data, index) =>
                              <EditRelationship
                                  insertRelation={this.handleInsertRelationWord}
                                  datas={data}
                                  key={index}
                              />
                          )}
                                </CardContent>
                            </Card>
                        </Grid>
                </Grid>
          </Grid>
      </div>
    );
  }
}
export default App;

class StateApi {
  constructor(rawData){
    //this.rawData = rawData;
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm:'',
      timestamp: new Date(),
    };
    //example to subscribe callbacks to the state
    this.subscriptions = {};
    this.lastSubscriptionsId = 0;
  }
  

  mapIntoObject(arr){
    return arr.reduce((acc,curr) =>{
      acc[curr.id]= curr;
      return acc;
    },{});
  }

  // getArticles(){
  //   return this.mapIntoObject(this.rawData.articles);
  // }
  // getAuthors(){
  //   return this.mapIntoObject(this.rawData.authors);
  // }
  lookupAuthor(authorId){
    return this.data.authors[authorId];
  }
  getState(){
    return this.data;
  }
  subscribe = (cb) =>{
    this.lastSubscriptionsId++;
    this.subscriptions[this.lastSubscriptionsId] = cb;
    return this.lastSubscriptionsId;
  }
  unsubscribe = (subscriptionId) =>{
    delete this.subscriptions[subscriptionId];
  }

  notifySubscribers = () =>{
    //for each subscriber run the callback
    Object.values(this.subscriptions).forEach((cb) => cb());
  }

  mergeWithState = (stateChange) =>{
    this.data = {
      ...this.data,
      ...stateChange
    };
    this.notifySubscribers();
  }

  setSearchTerm = (searchTerm) =>{
    // this.data.searchTerm = searchTerm;
    // this.notifySubscribers();
    this.mergeWithState({searchTerm,});
  }
  startClock = () =>{
    setInterval(() => {
      this.mergeWithState({
        timestamp: new Date(),
      });
    }, 1000);
  }


}

export default StateApi;
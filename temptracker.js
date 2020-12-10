function TempTracker() {
    
    this.highTemp = null;
    this.lowTemp = null;
    this.count = 0;
    this.sum = 0;
    this.avgTemp = null;
   
    this.insert = function(newTemp) {
      
      this.highTemp = this.highTemp ? Math.max(this.highTemp, newTemp) : newTemp;
      this.lowTemp = this.lowTemp ? Math.min(this.lowTemp, newTemp) : newTemp;
  
      this.count++;
      this.sum += newTemp;
      this.avgTemp = this.sum / this.count;
    };
    
    this.getHighest = function() {
      return this.highTemp;
    };
    
    this.getLowest = function() {
     return this.lowTemp;
    };
    
    this.getAverage = function() {
      return this.avgTemp;
    };
}
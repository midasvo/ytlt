function ytlt() {
	var self = this;
	var __construct = function() {
		self._settings = {
		}
		self.trackInput = function() {
			var e = document.getElementById("wrapper");
			e.addEventListener("input", function() {
				self.performReplace();
			}, false);
		};

		self.performReplace = function() {
			var currentValue = self.getValue().toLowerCase();
			console.log("Changing '" + currentValue + "'...");
			var maxLowerCaseAmount = 2;
			var currentLowerCaseAmount = 0;
			var newValue = "";
			for(var i = 0; i < currentValue.length; i ++) {
				if(this.randomChoice()) {
					newValue += currentValue[i].toUpperCase();
				} else {
					newValue += currentValue[i];
				}
			}
			self.setValue(newValue);
		};

		self.getValue = function() {
			return document.getElementsByClassName("ytlt")[0].value;
		};

		self.setValue = function(val) {
				document.getElementsByClassName("ytlt")[0].value = val;
		}

		self.randomChoice = function() {
			var r = Math.floor(Math.random()*2);
			if(r === 1 ) {
				return true;
			} else {
				return false;
			}
		}
	}();
}


        function popUpForm() {
            var x = document.getElementById("addArtistForm");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }

        function addArtist() {
            document.getElementById("addArtistForm").style.display="none";
            
            var nameValue = document.getElementById("artistName").value
            var aboutValue = document.getElementById("artistAbout").value
            var imgValue = document.getElementById("imgUrl").value
            
            var node = document.createElement("LI");
            var img = document.createElement('img'); 
            img.setAttribute("src", imgValue)
            img.setAttribute("class", "float-left artistImg")
            
            var name = document.createElement('p')
            name.setAttribute("class", "artistTitle")
            name.append(nameValue)
            
            var about = document.createElement('span');
            about.setAttribute("class", "");
            about.append(aboutValue);
            
            var delButton = document.createElement("button")
            delButton.setAttribute("class", "btn btn-danger float-right")

            delButton.append("Delete")
            
            delButton.addEventListener("click", function(){
                var li = this.parentNode;
                li.parentNode.removeChild(li);
              
            });
            
        
            
            node.setAttribute("class","list-group-item" )
            node.appendChild(img)
            node.appendChild(name);
            node.appendChild(about);
            node.appendChild(delButton)
            
            
             
            var artistList = document.getElementById("artistList");
            artistList.appendChild(node);
            
     
            
            document.getElementById("addArtistForm").reset()

        }


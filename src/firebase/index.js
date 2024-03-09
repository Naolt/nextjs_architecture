//import { firebase } from "firebase/app";

//const firebaseConfig = {
//  apiKey: "AIzaSyA0MuBjs5NL8_iKABs2500ilxSq6asj0tk",
//  authDomain: "pharmahub-cfcc7.firebaseapp.com",
//  projectId: "pharmahub-cfcc7",
//  storageBucket: "pharmahub-cfcc7.appspot.com",
//  messagingSenderId: "503599101330",
//  appId: "1:503599101330:web:5b64661a95ed143421fd4b",
//};

////
//firebase.initializeApp(firebaseConfig);
//const auth = firebase.auth();
//const database = firebase.database();
//const storage = firebase.storage();

//function register({ email, password, username, phoneNumber }) {
//  if (validate_email(email) == false || validate_password(password) == false) {
//    alert("Email or Password is Outta Line!!");
//    return;
//  }
//  if (
//    validate_field(username) == false ||
//    validate_field(phoneNumber) == false
//  ) {
//    alert("One or More Extra Fields is Outta Line!!");
//    return;
//  }

//  auth
//    .createUserWithEmailAndPassword(email, password)
//    .then(function () {
//      var user = auth.currentUser;

//      var database_ref = database.ref();

//      var user_data = {
//        email: email,
//        username: username,
//        phoneNumber: phoneNumber,
//        last_login: Date.now(),
//      };

//      database_ref.child("users/" + user.uid).set(user_data);

//      alert("User Created!!");
//    })
//    .catch(function (error) {
//      var error_code = error.code;
//      var error_message = error.message;

//      alert(error_message);
//    });
//}

//function login({ email, password }) {
//  //email = document.getElementById("email").value;
//  //password = document.getElementById("password").value;

//  if (validate_email(email) == false || validate_password(password) == false) {
//    alert("Email or Password is not valid!!");
//    return;
//  }

//  auth
//    .signInWithEmailAndPassword(email, password)
//    .then(function () {
//      var user = auth.currentUser;

//      var database_ref = database.ref();

//      var user_data = {
//        last_login: Date.now(),
//      };

//      database_ref.child("users/" + user.uid).update(user_data);

//      alert("User Logged In!!");
//    })
//    .catch(function (error) {
//      var error_code = error.code;
//      var error_message = error.message;

//      alert(error_message);
//    });
//}

//function createCategory() {
//  (categoryName = document.getElementById("catName").value),
//    (categoryDescription = document.getElementById("catDescription").value);

//  const category = {
//    categoryName: categoryName,
//    categoryDescription: categoryDescription,
//  };

//  database
//    .ref("categories/" + categoryName)
//    .set(category)
//    .then(() => {
//      console.log("Category created successfully:", category);
//    })
//    .catch((error) => {
//      console.error("Error creating category:", error);
//    });
//}

//function createPharmacy() {
//  //var name = document.getElementById("name").value;
//  //var description = document.getElementById("description").value;
//  //var location = document.getElementById("location").value;
//  //var logoFile = document.getElementById("logo").files[0];
//  //var bannerFile = document.getElementById("banner").files[0];
//  //// var products = document.getElementById("products").value.split("\n");
//  //var company = document.getElementById("company").value;

//  //// Upload logo and banner files to Firebase Storage
//  //var logoRef = storage.ref().child("logos/" + logoFile.name);
//  //var bannerRef = storage.ref().child("banners/" + bannerFile.name);

//  //var logoUploadTask = logoRef.put(logoFile);
//  //var bannerUploadTask = bannerRef.put(bannerFile);

//  Promise.all([logoUploadTask, bannerUploadTask])
//    .then((snapshot) => {
//      console.log("Uploaded logo and banner successfully");

//      // Get download URLs for logo and banner
//      var logoDownloadURL = snapshot[0].ref.getDownloadURL();
//      var bannerDownloadURL = snapshot[1].ref.getDownloadURL();

//      // Wait for both download URLs
//      Promise.all([logoDownloadURL, bannerDownloadURL])
//        .then((downloadURLs) => {
//          var logoURL = downloadURLs[0];
//          var bannerURL = downloadURLs[1];

//          // Create pharmacy data
//          var pharmacyData = {
//            name: name,
//            description: description,
//            location: location,
//            logo: logoURL,
//            banner: bannerURL,
//            // products: products,
//            company: company,
//          };

//          // Push the data to the database
//          var newPharmacyKey = database.ref().child("pharmacies").push().key;
//          var updates = {};
//          updates["/pharmacies/" + newPharmacyKey] = pharmacyData;

//          database
//            .ref()
//            .update(updates)
//            .then(() => {
//              console.log(
//                "Pharmacy created successfully with ID:",
//                newPharmacyKey
//              );
//            })
//            .catch((error) => {
//              console.error("Error creating pharmacy:", error);
//            });
//        })
//        .catch((error) => {
//          console.error("Error getting download URLs:", error);
//        });
//    })
//    .catch((error) => {
//      console.error("Error uploading files:", error);
//    });
//}

//function addProductToPharmacy(pharmacyId, productId) {
//  // Reference to the pharmacy's products node in the database
//  var pharmacyProductsRef = firebase
//    .database()
//    .ref("pharmacies/" + pharmacyId + "/products");

//  // Check if the pharmacy node exists
//  pharmacyProductsRef.parent
//    .once("value")
//    .then(function (snapshot) {
//      if (snapshot.exists()) {
//        // Retrieve the current list of products from the pharmacy
//        return pharmacyProductsRef.once("value");
//      } else {
//        throw new Error("Pharmacy with ID " + pharmacyId + " does not exist.");
//      }
//    })
//    .then(function (snapshot) {
//      var products = snapshot.val() || []; // Initialize as an empty array if products node doesn't exist

//      // Add the new product ID to the products list
//      products.push(productId);

//      // Update the products list of the pharmacy
//      return pharmacyProductsRef.set(products);
//    })
//    .then(function () {
//      console.log("Product added to pharmacy successfully!");
//    })
//    .catch(function (error) {
//      console.error("Error adding product to pharmacy:", error);
//    });
//}

////addProductToPharmacy("NsSHafd-rN1fcneEcld", "NsPLKDMMXvnNrqg67lg");
////addProductToPharmacy("NsSHafd-rN1fcneEcld", "NsPlSCmsfnP-I5Dh-_D");

//function createProduct(
//  name,
//  id,
//  company,
//  category,
//  photo,
//  expiryDate,
//  categories,
//  amount,
//  price,
//  description,
//  dosage,
//  sideEffects,
//  minStock = null,
//  maxStock = null,
//  visibility = true,
//  sellability = true
//) {
//  name = document.getElementById("name").value;
//  company = document.getElementById("company").value;
//  // category = document.getElementById('category').value
//  expiryDate = document.getElementById("expiryDate").value;
//  photo = document.getElementById("photo").value;
//  categories = document.getElementById("category").value;
//  amount = document.getElementById("amount").value;
//  price = document.getElementById("price").value;
//  description = document.getElementById("description").value;
//  dosage = document.getElementById("dossage").value;
//  sideEffects = document.getElementById("sideEffect").value;
//  minstock = document.getElementById("minstock").value;
//  maxStock = document.getElementById("maxstock").value;
//  visibility = document.getElementById("visibility").value;
//  sellability = document.getElementById("sellability").value;

//  const storageRef = storage.ref();
//  const photoFileName = name + company + ".jpg";
//  const filePath = "product_photos/" + photoFileName;

//  const uploadTask = storageRef.child(filePath).put(photo);

//  var downloadUrl = "";
//  uploadTask.then(async (snapshot) => {
//    downloadUrl = await snapshot.ref.getDownloadURL();
//    const product = {
//      name: name,

//      company: company,
//      photo: downloadUrl,
//      expiryDate: new Date(expiryDate),
//      categories: categories,
//      amount: amount,
//      price: price,
//      description: description,
//      dosage: dosage,
//      sideEffects: sideEffects,
//      minStock: minStock,
//      maxStock: maxStock,
//      visibility: visibility,
//      sellability: sellability,
//    };

//    database
//      .ref("products/")
//      .push(product)
//      .then((ref) => {
//        const productId = ref.key; // Firebase-generated ID
//        console.log(
//          "Product created successfully with Firebase-generated ID:",
//          productId
//        );
//      })
//      .catch((error) => {
//        console.error("Error creating product:", error);
//      });
//  });
//}

//function searchProductByName(name) {
//  const productsRef = database.ref("products");

//  // Query all products
//  return productsRef
//    .once("value")
//    .then((snapshot) => {
//      const matchingProducts = [];
//      snapshot.forEach((childSnapshot) => {
//        const product = childSnapshot.val();
//        // Check if the product name matches the search name
//        if (product.name === name) {
//          matchingProducts.push(product);
//        }
//      });

//      //sort by distance
//      return matchingProducts;
//    })
//    .catch((error) => {
//      console.error("Error searching for products:", error);
//      return [];
//    });

//  //include pharmacies
//}

//function searchProductsByCategory(category) {
//  // Reference to the Realtime Database
//  const database = firebase.database();

//  // Reference to the "products" node
//  const productsRef = database.ref("products");

//  // Query all products
//  return productsRef
//    .once("value")
//    .then((snapshot) => {
//      const matchingProducts = [];
//      snapshot.forEach((childSnapshot) => {
//        const product = childSnapshot.val();
//        // Check if the product has the specified category
//        if (product.categories && product.categories.includes(category)) {
//          matchingProducts.push(product);
//        }
//      });
//      return matchingProducts;
//    })
//    .catch((error) => {
//      console.error("Error searching for products:", error);
//      return [];
//    });
//}

//function searchProductsByPriceRange(minPrice, maxPrice) {
//  // Reference to the Realtime Database
//  const database = firebase.database();

//  // Reference to the "products" node
//  const productsRef = database.ref("products");

//  // Query all products
//  return productsRef
//    .once("value")
//    .then((snapshot) => {
//      const matchingProducts = [];
//      snapshot.forEach((childSnapshot) => {
//        const product = childSnapshot.val();
//        // Check if the product price is within the specified range
//        if (product.price >= minPrice && product.price <= maxPrice) {
//          matchingProducts.push(product);
//        }
//      });

//      //sort by distance
//      return matchingProducts;
//    })
//    .catch((error) => {
//      console.error("Error searching for products:", error);
//      return [];
//    });
//}

//function searchProductsByCompany(company) {
//  // Reference to the Realtime Database
//  const database = firebase.database();

//  // Reference to the "products" node
//  const productsRef = database.ref("products");

//  // Query all products
//  return productsRef
//    .once("value")
//    .then((snapshot) => {
//      const matchingProducts = [];
//      snapshot.forEach((childSnapshot) => {
//        const product = childSnapshot.val();
//        // Check if the product's company matches the specified company
//        if (product.company === company) {
//          matchingProducts.push(product);
//        }
//      });

//      //maybe sort alphabetically
//      return matchingProducts;
//    })
//    .catch((error) => {
//      console.error("Error searching for products:", error);
//      return [];
//    });
//}

//// Usage example
//searchProductsByCompany("A2sv").then((matchingProducts) => {
//  console.log("Matching products:", matchingProducts);
//});

////   searchProductsByPriceRange(5, 500)
////     .then((matchingProducts) => {
////       console.log("Matching products:", matchingProducts);
////     });

////   searchProductsByCategory("Maternal")
////     .then((matchingProducts) => {
////       console.log("Matching products:", matchingProducts);
////     });

////  searchProductByName("Aymen Eliyas")
////   .then((matchingProducts) => {
////     console.log("Matching products:", matchingProducts);
////   });

//function validate_email(email) {
//  expression = /^[^@]+@\w+(\.\w+)+\w$/;
//  if (expression.test(email) == true) {
//    // Email is good
//    return true;
//  } else {
//    // Email is not good
//    return false;
//  }
//}

//function validate_password(password) {
//  // if (password < 6) {
//  //   return false
//  // } else {
//  //   return true
//  // }
//}

//function validate_field(field) {
//  if (field == null) {
//    return false;
//  }

//  if (field.length <= 0) {
//    return false;
//  } else {
//    return true;
//  }
//}

//export async function addUserWithRolePharmacy({ name, email, username }) {
//  try {
//    // Generate a unique password
//    const password = 12345678;

//    // Create the user with email as username and generated password
//    const { user } = await auth.createUserWithEmailAndPassword(email, password);

//    // Store additional user data in Firestore

//    const userId = auth.currentUser.uid;
//    await database.ref(`users/${userId}`).set({
//      name: name,
//      username: username,
//      role: "pharmacy",
//    });

//    console.log("User created successfully:", userId);
//    return user.uid; // Return the user ID
//  } catch (error) {
//    console.error("Error creating user:", error);
//    throw error; // Rethrow the error
//  }
//}

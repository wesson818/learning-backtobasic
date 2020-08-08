// The main idea of the dependency inversion principle is that any class that 
// uses a dependency should only ever use the dependency through a predefined interface/wrapper. 
// This makes it so that your code will never directly depend on a low level API for its operations. 
// The reason this is so important is because if you ever need to change or remove that dependency it becomes really difficult when it is used all over your code. 
// By wrapping this dependency in an interface you can depend on the interface you created which will make changing out the dependency painless.

// a payment process rather than change payment function code when you change the way to let user to pay


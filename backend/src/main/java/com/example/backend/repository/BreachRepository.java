// @Repository
// public class UserRepository extends ScalarDbReadOnlyRepository<User> {
//   public static final String NAMESPACE = "breach";
//   public static final String TABLE_NAME = "items";
//   public static final String COMMON_KEY = "";

//     // Important functions for now

//     public String save(User user) {
//         return super.save(user);
//     }
    
//     public User updateById(String id, User user) {
//         return super.updateById(id, user);
//     }

//     public List<User> findAll() {
//         return super.findAll();
//     }

//     public User findById(String id) {
//         return super.findById(id);
//     }

//     public void deleteById(String id) {
//         super.deleteById(id);
//     }


//     // NEW FUNCITIONS 

//     public List<User> findByEmail(String email) {
//         return super.findByField("email", email);
//     }

//     public List<User> findByUsername(String username) {
//         return super.findByField("username", username);
//     }

//     public List<User> findByPassword(String password) {
//         return super.findByField("password", password);
//     }

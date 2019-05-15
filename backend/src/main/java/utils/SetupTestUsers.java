package utils;

import entity.Role;
import entity.User;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;

public class SetupTestUsers {

  public static void main(String[] args) {

    EntityManager em = Persistence.createEntityManagerFactory("pu").createEntityManager();
    
    // IMPORTAAAAAAAAAANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // This breaks one of the MOST fundamental security rules in that it ships with default users and passwords
    // CHANGE the three passwords below, before you uncomment and execute the code below
    
   // throw new UnsupportedOperationException("REMOVE THIS LINE, WHEN YOU HAVE READ WARNING");
    
       
    em.getTransaction().begin();
    Role userRole = new Role("user");
    Role adminRole = new Role("admin");
    Role superuserRole = new Role("superuser");
    Role readOnlyRole = new Role("readonly");
    
    User testuser = new User("telemarketer", "1234");
    testuser.addRole(readOnlyRole);
    
    User user = new User("kurt", "wonnegut");
    user.addRole(userRole);
    User admin = new User("boss", "jegelskerkurt");
    admin.addRole(adminRole);
    User superuser = new User("salesmanager", "superman");
    superuser.addRole(superuserRole);
    
    
    //Persist roles
    em.persist(readOnlyRole);
    em.persist(superuserRole);
    em.persist(userRole);
    em.persist(adminRole);
    
    //Persist users
    em.persist(testuser);
    em.persist(superuser);
    em.persist(user);
    em.persist(admin);
    
    
    em.getTransaction().commit();
    System.out.println("PW: " + user.getUserPass());
    System.out.println("Testing user with OK password: " + user.verifyPassword("test"));
    System.out.println("Testing user with wrong password: " + user.verifyPassword("test1"));
    System.out.println("Created TEST Users");
   
  }

}

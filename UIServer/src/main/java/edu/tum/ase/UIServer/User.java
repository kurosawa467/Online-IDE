package edu.tum.ase.UIServer;

public class User {
    private boolean authenticated;
    private String userId;
    private String username;

    public User(boolean authenticated, String userId, String username) {
        this.authenticated = authenticated;
        this.userId = userId;
        this.username = username;
    }

    public boolean isAuthenticated() {
        return authenticated;
    }

    public void setAuthenticated(boolean authenticated) {
        this.authenticated = authenticated;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}

package com.smartglossa.expense;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

public class ExpenseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ExpenseServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String op = request.getParameter("operation");
		if(op.equals("addExpense")){
			JSONObject obj = new JSONObject();
			String category = request.getParameter("category");
			float amount = Float.parseFloat(request.getParameter("amnt"));
			String date = request.getParameter("date");
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/expense", "root", "root");
				Statement stmt = conn.createStatement();
				String query = "Insert into expense(category,amount,date) values('"+ category +"',"+ amount +",'"+ date +"')";
				stmt.execute(query);
				obj.put("status", "1");
			} catch (Exception e) {
				obj.put("status", "0");
				e.printStackTrace();
			}
			response.getWriter().print(obj);
		}else if(op.equals("getExpense")){
			JSONObject obj = new JSONObject();
			String date = request.getParameter("date");
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/expense", "root", "root");
				Statement stmt = conn.createStatement();
				String query = "select *from expense where date="+ date;
				ResultSet rs = stmt.executeQuery(query);
				if(rs.next()){
					obj.put("category", rs.getString("category"));
					obj.put("amount", rs.getInt("amount"));
					
				}
			} catch (Exception e) {
				obj.put("status", "0");
				e.printStackTrace();
			}
			response.getWriter().print(obj);
		}
	}

}

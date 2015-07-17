package service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

import domain.Employer;

@Service
public class EmployerService {
	
	private List<Employer> employers = new ArrayList<Employer>();

	public EmployerService() {
		Employer employer1 = new Employer();
		employer1.setCity("Noida");
		employer1.setName("hCentive");
		employer1.setId(0);
		employers.add(employer1);
		Employer employer2 = new Employer();
		employer2.setCity("Mountain View");
		employer2.setName("Google");
		employer2.setId(1);
		employers.add(employer2);
		Employer employer3 = new Employer();
		employer3.setCity("Redmond");
		employer3.setName("Washington");
		employer3.setId(2);
		employers.add(employer3);
		Employer employer4 = new Employer();
		employer4.setCity("San Francisco");
		employer4.setName("Sales Force");
		employer4.setId(3);
		employers.add(employer4);
		Employer employer5 = new Employer();
		employer5.setCity("Seattle");
		employer5.setName("Amazon");
		employer5.setId(4);
		employers.add(employer5);
		Employer employer6 = new Employer();
		employer6.setCity("Cupertino");
		employer6.setName("Apple");
		employer6.setId(5);
		employers.add(employer6);
		System.out.println("Employer Service initiated");
	}
	
	public List<Employer> getEmployers() {
		return employers;
 	}
	
	public synchronized void deleteEmployer(int employerId) {
		Iterator<Employer> iterator = employers.iterator();
		while(iterator.hasNext()) {
			Employer empl = iterator.next();
			if(empl.getId() == employerId) {
				iterator.remove();
			}
			
		}
	}
	
	public synchronized Employer addEmployer(Employer employer) {
		employer.setId(employers.size());
		employers.add(employer);
		return employer;
	}
}

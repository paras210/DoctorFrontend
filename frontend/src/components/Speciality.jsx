import React, { useState } from 'react';

export default function SpecialtySelection() {
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const [selectedRange, setSelectedRange] = useState('Select Radius');

    const specialties = [
        "GENERAL PHYSICIAN", "ALLERGY AND IMMUNOLOGY", "ANESTHESIOLOGY",
        "DERMATOLOGY", "DIAGNOSTIC RADIOLOGY", "EMERGENCY MEDICINE",
        "FAMILY MEDICINE", "INTERNAL MEDICINE", "MEDICAL GENETICS",
        "NEUROLOGY", "NUCLEAR MEDICINE", "OBSTETRICS AND GYNECOLOGY", "OPHTHALMOLOGY",
        "PATHOLOGY", "PEDIATRICS", "PHYSICAL MEDICINE AND REHABILITATION",
        "PREVENTIVE MEDICINE", "PSYCHIATRY", "RADIATION ONCOLOGY",
        "SURGERY", "UROLOGY", "CARDIOLOGIST", "DERMATOLOGIST",
        "NEUROLOGIST", "PEDIATRICIAN", "ORTHOPEDIC"
    ];

    const radiusRanges = [
        '0-10 km', '10-20 km', '20-30 km', '30-40 km', '40-50 km',
        '50-60 km', '60-70 km', '70-80 km', '80-90 km', '90-100 km'
    ];

    const handleSelection = (specialty) => setSelectedSpecialty(specialty);
    const handleSelect = (range) => setSelectedRange(range);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-8">
                    <h3 className="mb-4 text-center">Select a Specialty</h3>
                    <div className="row g-3">
                        {specialties.map((specialty, index) => (
                            <div key={index} className="col-6 col-md-4">
                                <button
                                    type="button"
                                    className={`btn w-100 ${selectedSpecialty === specialty ? 'btn-primary' : 'btn-outline-secondary'}`}
                                    onClick={() => handleSelection(specialty)}
                                >
                                    {specialty}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3 className="mb-4 text-center">Select Radius</h3>
                    <div className="dropdown">
                        <button
                            className="btn btn-primary dropdown-toggle w-100"
                            type="button"
                            id="radiusDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {selectedRange}
                        </button>
                        <ul className="dropdown-menu w-100" aria-labelledby="radiusDropdown">
                            {radiusRanges.map((range, index) => (
                                <li key={index}>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleSelect(range)}
                                    >
                                        {range}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
